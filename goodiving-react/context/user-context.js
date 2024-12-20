// 負責存放具體的使用者資料，如個人資訊、偏好設定、歷史紀錄等。
import { createContext, useContext, useState, useEffect } from 'react';
import { MEMBER_LIST } from '@/configs/api-path.js';
import { useAuth } from '@/context/auth-context';
import moment from 'moment-timezone';

const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const { auth } = useAuth();

  // 取得會員資料
  const [userData, setUserData] = useState({});
  const [isUserContextLoading, setIsUserContextLoading] = useState(false);

  useEffect(() => {
    const user_id = auth.user_id;
    if (!user_id) {
      setIsUserContextLoading(false); // 如果沒有 user_id，標記為初始化完成
      return;
    }

    const findUserData = async () => {
      setIsUserContextLoading(true); // 初始化開始
      try {
        if (user_id) {
          const response = await fetch(MEMBER_LIST, {
            method: 'POST',
            body: JSON.stringify({ user_id }),
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          });
          let result = await response.json();
          if (result) {
            let formattedBirthday = moment(result.user_birthday).format(
              'YYYY-MM-DD'
            );
            result = { ...result, user_birthday: formattedBirthday };
            setUserData(result);
          }
          console.log(
            '看一下uerConext回應的result:',
            JSON.stringify(result, null, 4)
          );
        } else {
          return console.log('uerConext沒有取得 user_id，所以沒有資料！');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsUserContextLoading(false); // 初始化結束
      }
    };
    findUserData();
  }, [auth.user_id]);

  return (
    <UserContext.Provider
      value={{ userData, setUserData, isUserContextLoading }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
export default UserContext;
