import { useState } from 'react';
import Search1sm from '@/components/search/search-1-sm';
import Search1lg from '@/components/search/search-1-lg';
import Search2sm from '@/components/search/search-2-sm';
import Search2lg from '@/components/search/search-2-lg';
import Search3sm from '@/components/search/search-3-sm';
import Search3lg from '@/components/search/search-3-lg';
import Search4sm from '@/components/search/search-4-sm';
import Search4lg from '@/components/search/search-4-lg';
import Searchsm from '@/components/search/search-sm';
import Pagination from '@/components/pagination';
import SelectRect from '@/components/dropdown/select-rect';
import SelectEllipse from '@/components/dropdown/select-ellipse';
import SelectEllipse2 from '@/components/dropdown/select-ellipse2';
import SelectEllipseIndex from '@/components/dropdown/select-ellipse-index';
import SelectEllipseIndexsm from '@/components/dropdown/select-ellipse-index-sm';
import SelectEllipse2Index from '@/components/dropdown/select-ellipse2-index';
import SelectEllipse2Indexsm from '@/components/dropdown/select-ellipse2-index-sm';
import DatePicker from '@/components/dropdown/date-picker';
import DatePickerIndex from '@/components/dropdown/date-picker-index';
import DatePickerIndexsm from '@/components/dropdown/date-picker-index-sm';
import InputComponent from '@/components/inputs/input-component';
import Card2 from '@/components/eden/card2';
import Card1 from '@/components/eden/card1';
import Card3 from '@/components/eden/card3';

export default function Test() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [inputValue, setInputValue] = useState('');
  const options = ['AAA', 'BBB', 'CCC'];
  const options1 = [
    { value: 'time_asc', label: '最新商品' },
    { value: 'price_asc', label: '價格從低到高' },
    { value: 'price_desc', label: '價格從高到低' },
  ];

  const onClick = () => {
    console.log('送出搜尋');
  };
  return (
    <>
      <hr />
      <div
        style={{
          backgroundColor: '#C4CFDD',
          display: 'flex',
        }}
      >
        <Search1sm
          inputValue={inputValue}
          setInputValue={setInputValue}
          onClick={onClick}
        />
        <Search1lg
          inputValue={inputValue}
          setInputValue={setInputValue}
          onClick={onClick}
        />
      </div>
      <hr />
      <div
        style={{
          backgroundColor: '#C4CFDD',
          display: 'flex',
        }}
      >
        <Search2sm />
        <Search2lg />
      </div>
      <hr />
      <div
        style={{
          backgroundColor: '#C4CFDD',
          display: 'flex',
        }}
      >
        <Search3sm />
        <Search3lg />
      </div>
      <hr />
      <div
        style={{
          backgroundColor: '#C4CFDD',
          display: 'flex',
        }}
      >
        <Search4sm />
        <Search4lg />
      </div>
      <hr />
      <div
        style={{
          backgroundColor: '#C4CFDD',
          display: 'flex',
        }}
      >
        <Searchsm />
      </div>
      <hr />
      <div
        style={{
          backgroundColor: '#C4CFDD',
          display: 'flex',
        }}
      >
        <SelectEllipse
          options={options}
          onChange={setSelectedOption}
          option={selectedOption}
        />
        <SelectEllipse2
          options={options}
          onChange={setSelectedOption}
          option={selectedOption}
        />
      </div>
      <hr />
      <div
        style={{
          backgroundColor: '#C4CFDD',
          display: 'flex',
        }}
      >
        <SelectRect
          options={options1}
          onChange={setSelectedOption}
          option={selectedOption}
        />
        <DatePicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <hr />

      <div
        style={{
          backgroundColor: '#C4CFDD',
          display: 'flex',
        }}
      >
        <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
        <InputComponent
          isError={true}
          errorMessage="Error message"
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
      <hr />
      <div
        style={{
          backgroundColor: '#C4CFDD',
          display: 'flex',
          height: '250px',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
      >
        <DatePickerIndexsm
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <SelectEllipseIndexsm
          options={options}
          onChange={setSelectedOption}
          option={selectedOption}
        />
        <SelectEllipse2Indexsm
          options={options}
          onChange={setSelectedOption}
          option={selectedOption}
        />
        {/* <SelectEllipseIndex
          options={options}
          onChange={setSelectedOption}
          option={selectedOption}
        />
        <SelectEllipse2Index
          options={options}
          onChange={setSelectedOption}
          option={selectedOption}
        />
        <DatePickerIndex
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        /> */}
      </div>
      <hr />
      <div
        style={{
          backgroundColor: '#C4CFDD',
          display: 'flex',
        }}
      >
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
      <hr />
      <div
        style={{
          backgroundColor: '#C4CFDD',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Card2 />
        <Card2 />
      </div>
      <hr />
      <div
        style={{
          backgroundColor: '#C4CFDD',
          display: 'flex',
        }}
      >
        <Card3 />
        <Card3 />
        <Card3 />
      </div>
      <hr />
      <div>
        <Pagination />
      </div>
    </>
  );
}
