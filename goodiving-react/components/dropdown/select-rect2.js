import { useState, useRef, useEffect } from 'react';
import styles from './select-rect.module.css';
import { FaAngleDown } from 'react-icons/fa';

export default function SelectRect({
  options = [],
  onChange = () => {},
  option = '',
  updateQueryString,
}) {
  const [isOpen, setIsOpen] = useState(false); // 狀態：控制下拉選單是否打開
  const [isSelected, setIsSelected] = useState(false); // 用來追蹤是否已選擇某個選項
  const dropdownRef = useRef(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const selectedLabel = options.find((o) => o.value === option)?.label;

  const handleSelect = (option) => {
    onChange((prevFilters) => ({ ...prevFilters, sort: option }));
    if (updateQueryString) {
      updateQueryString({ sort: option }); // 更新 query string
    }
    setIsOpen(false); // 選擇後關閉下拉選單
    setIsSelected(true); // 設置為已選擇狀態，更新按鈕樣式
  };

  const handleClickOutside = (event) => {
    // 如果點擊不在 dropdown 元素內，則關閉選單
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // 當選單打開時，添加全域點擊事件監聽器
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // 清理事件監聽器
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.container} ref={dropdownRef}>
      {/* Button (acts like select) */}
      <button
        className={`${styles.selectButton} ${isOpen ? styles.open : ''} ${
          isSelected ? styles.selected : ''
        }`}
        onClick={handleButtonClick}
      >
        {/* Placeholder Text */}
        <span className={styles.buttonText}>
          {selectedLabel ? selectedLabel : '請選擇'}
        </span>
        {/* Icon 2 */}
        <FaAngleDown className={styles.iconRight} />
      </button>

      {/* Select Content */}
      {isOpen && (
        <div className={styles.selectContent}>
          <ul className={styles.list}>
            {options.map((option, index) => (
              <li
                key={index}
                className={styles.listItem}
                onClick={() => handleSelect(option.value)}
                role="presentation"
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
