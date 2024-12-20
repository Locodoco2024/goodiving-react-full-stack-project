import React, { useState } from 'react';
import Layout from '@/components/layouts/layout';
import NoSide from '@/components/layouts/noSide';
import Input from '@/components/shirley/input';
import InputPsd from '@/components/shirley/input-psd';
import styles from './register.module.css';
import DatePicker from '@/components/shirley/date-picker';
import InputRadio from '@/components/inputs/input-radio';
import BtnPrimary from '@/components/shirley/btn-fill-primary';
import BtnLight from '@/components/shirley/btn-fill-light';
import { z } from 'zod';
import { AUTH_REGISTER } from '@/configs/api-path.js';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useAuth } from '@/context/auth-context';

const storageKey = 'goodiving-auth';

export default function Register() {
  const router = useRouter();
  const { setAuth } = useAuth();

  const [myForm, setMyForm] = useState({
    email: '',
    name: '',
    password: '',
    checkpassword: '',
    birthday: null,
    phone: '',
    sex: '',
  });

  const [errorMessage, setErrorMessage] = useState({
    email: '',
    name: '',
    password: '',
    checkpassword: '',
    birthday: '',
    phone: '',
    sex: '',
  });

  // const [isSubmitting, setIsSubmitting] = useState(false);

  const onchange = (e) => {
    const obj = { ...myForm, [e.target.name]: e.target.value };
    // console.log('看一下目前myForm狀態(obj物件)：' + JSON.stringify(obj, null, 2));
    setMyForm(obj);
  };

  const handleRadioChange = (value) => {
    setMyForm(() => {
      return { ...myForm, sex: value };
    });
  };

  const handleDateChange = (date) => {
    setMyForm((prev) => ({
      ...prev,
      birthday: date || '', // 保持為 Date 物件，避免空值傳入
    }));
    setErrorMessage((prev) => ({
      ...prev,
      birthday: '', // 清除錯誤訊息
    }));
  };

  const options = [
    { label: '男生', value: '1' },
    { label: '女生', value: '2' },
  ];

  // ZOD 資料驗證的 Schema
  const registerSchema = z.object({
    email: z
      .string()
      .email({ message: '請輸入正確的Email格式' })
      .min(1, { message: 'Email 為必填欄位' }),
    name: z
      .string()
      .min(2, { message: '請輸入正確的中文姓名' })
      .regex(/^[\u4e00-\u9fa5]+$/, { message: '請輸入正確的中文姓名' }),
    password: z
      .string()
      .min(8, { message: '密碼須至少8字元，包含英文及數字' })
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
        message: '密碼須至少8字元，包含英文及數字',
      }),
    checkpassword: z
      .string()
      .min(8, { message: '密碼須至少8字元，包含英文及數字' })
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
        message: '密碼須至少8字元，包含英文及數字',
      }),
    phone: z.string().regex(/^09\d{2}-?\d{3}-?\d{3}$/, {
      message: '請輸入正確的手機格式',
    }),
    sex: z.string().min(1, { message: '請選擇性別' }),
    birthday: z.date({
      required_error: '生日為必填欄位',
      invalid_type_error: '請輸入有效的日期格式',
    }),
  });

  // onBlur 的資料驗證
  const handleBlur = (field) => {
    const fieldSchema = registerSchema.shape[field];
    // console.log('registerSchema.shape:', registerSchema.shape);

    if (!fieldSchema) {
      return;
    }

    // Log確認是否進入該區塊
    console.log(`Handling blur for field: ${field}`);

    const result = fieldSchema.safeParse(myForm[field]);
    if (field) {
      setErrorMessage((prev) => ({
        ...prev,
        [field]: result.success ? '' : result.error.issues[0]?.message,
      }));
    }

    console.log(
      '這應該是剛render完的errorMessage1:',
      JSON.stringify(errorMessage, null, 4)
    );

    if (field === 'birthday') {
      const isDateValid =
        myForm.birthday instanceof Date && !isNaN(myForm.birthday);
      setErrorMessage((prev) => ({
        ...prev,
        birthday: isDateValid ? '' : '生日為必填，請選擇有效的日期',
      }));
    }

    // 密碼和確認密碼比對檢查
    if (field == 'password' || field == 'checkpassword') {
      if (
        myForm.password &&
        myForm.checkpassword &&
        myForm.password !== myForm.checkpassword
      ) {
        setErrorMessage((prev) => ({
          ...prev,
          password: '確認密碼與密碼不相符',
          checkpassword: '確認密碼與密碼不相符',
        }));
        // return;
      }
    }
    console.log(
      '進行onBlure的errorMessage2:',
      JSON.stringify(errorMessage, null, 4)
    );
  };

  const oneclick = () => {
    setMyForm({
      email: 'shirley10900@gmail.com',
      name: '陳偉英',
      password: 'zz123456',
      checkpassword: 'zz123456',
      birthday: new Date('1999-11-02'),
      phone: '0912345678',
      sex: '1',
    });
  };

  // 按下「確定送出」按鈕
  const sendData = async (e) => {
    e.preventDefault();

    // 清空錯誤訊息並設置提交狀態
    setErrorMessage({
      email: '',
      name: '',
      password: '',
      checkpassword: '',
      birthday: '',
      phone: '',
      sex: '',
    });

    const formData = { ...myForm };

    try {
      const response = await fetch(AUTH_REGISTER, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const result = await response.json();
      console.log('伺服器回傳的result', JSON.stringify(result, null, 4));

      if (!result.success) {
        const errs = result.error.issues || '';

        errs.forEach((err) => {
          if (err) {
            const path = err.path[0];
            let zodErrorMessage = err.message;
            if (path === 'sex' && zodErrorMessage) {
              zodErrorMessage = '請選擇性別';
            }
            setErrorMessage((prev) => ({
              ...prev,
              [path]: zodErrorMessage,
            }));
          }
        });
      }

      // 錯誤訊息設定: 比對密碼是否樣
      if (myForm.password !== myForm.checkpassword) {
        setErrorMessage((prev) => ({
          ...prev,
          password: '確認密碼與密碼不相符',
          checkpassword: '確認密碼與密碼不相符',
        }));
      }

      if (result.success) {
        toast.success('註冊成功');
        localStorage.setItem(storageKey, JSON.stringify(result.data));
        setAuth(result.data);
        setTimeout(() => {
          router.replace('/');
        }, 700);
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  const clearData = (e) => {
    e.preventDefault();

    setMyForm({
      email: '',
      name: '',
      password: '',
      checkpassword: '',
      birthday: null,
      phone: '',
      sex: '',
    });

    setErrorMessage({
      email: '',
      name: '',
      password: '',
      checkpassword: '',
      birthday: '',
      phone: '',
      sex: '',
    });
  };

  return (
    <Layout>
      <NoSide>
        <div className={styles['title']}>
          <button onClick={oneclick} className={styles['oneclick']}>
            一鍵輸入
          </button>
          <h4>輸入會員資料</h4>
        </div>
        <form
          name="registerFrom"
          onSubmit={(e) => {
            sendData(e);
          }}
        >
          <div className={styles['input-content']}>
            <div className={styles['input-box']}>
              <label htmlFor="email" className={styles['input-label']}>
                <span>電子信箱</span>
              </label>
              <Input
                name="email"
                placeholder="your-eamil@example.com"
                value={myForm.email}
                onChange={onchange}
                isError={errorMessage.email}
                errorMessage={errorMessage.email}
                onBlur={() => handleBlur('email')}
              />
            </div>
            <div className={styles['input-box']}>
              <label htmlFor="name" className={styles['input-label']}>
                <span>姓名</span>
              </label>
              <Input
                name="name"
                placeholder="請輸入姓名"
                value={myForm.name}
                onChange={onchange}
                isError={errorMessage.name}
                errorMessage={errorMessage.name}
                onBlur={() => handleBlur('name')}
              />
            </div>
            <div className={styles['input-box']}>
              <label htmlFor="password" className={styles['input-label']}>
                <span>密碼</span>
              </label>
              <InputPsd
                name="password"
                type="password"
                placeholder="請輸入至少8字元，需包含英文字母及數字"
                value={myForm.password}
                onChange={onchange}
                isError={errorMessage.password}
                errorMessage={errorMessage.password}
                onBlur={() => handleBlur('password')}
              />
            </div>
            <div className={styles['input-box']}>
              <label htmlFor="checkpassword" className={styles['input-label']}>
                <span>確認密碼</span>
              </label>
              <InputPsd
                name="checkpassword"
                type="password"
                placeholder="請再次輸入密碼"
                value={myForm.checkpassword}
                onChange={onchange}
                isError={errorMessage.password}
                errorMessage={errorMessage.password}
                onBlur={() => handleBlur('password')}
              />
            </div>
            <div className={styles['input-box']}>
              <label htmlFor="birthday" className={styles['input-label2']}>
                <span>生日</span>
              </label>
              <div className={styles['date-picker-box']}>
                <DatePicker
                  name="birthday"
                  value={myForm.birthday}
                  onChange={handleDateChange}
                  isError={!!errorMessage.birthday}
                  errorMessage={errorMessage.birthday}
                  onBlur={() => {
                    console.log('DatePicker onBlur triggered');
                    handleBlur('birthday');
                  }}
                />
              </div>
            </div>
            <div className={styles['input-box']}>
              <label htmlFor="phone" className={styles['input-label']}>
                <span>手機號碼</span>
              </label>
              <Input
                name="phone"
                placeholder="請輸入09開頭的10碼數字"
                value={myForm.phone}
                onChange={onchange}
                isError={errorMessage.phone}
                errorMessage={errorMessage.phone}
                onBlur={() => handleBlur('phone')}
              />
            </div>
            <div className={styles['input-box']}>
              <label htmlFor="sex" className={styles['input-label']}>
                <span>性別</span>
              </label>
              <div className={styles['radio-box']}>
                <InputRadio
                  name="sex"
                  options={options}
                  selectedRadio={myForm.sex}
                  onChange={handleRadioChange}
                  isError={errorMessage.sex}
                  errorMessage={errorMessage.sex}
                  onBlur={() => handleBlur('sex')}
                />
              </div>
            </div>
          </div>
          <div className={styles['btn-box']}>
            <BtnLight onClick={clearData}>重新填寫</BtnLight>
            <BtnPrimary type="submit">確定送出</BtnPrimary>
          </div>
        </form>
      </NoSide>
    </Layout>
  );
}
