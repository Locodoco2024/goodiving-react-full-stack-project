import styles from '../karen/logcard.module.css';
import { FaRegCalendar } from 'react-icons/fa';
import MiniTag from '../tag/minitag';
import TagGlass from '../tag/tag-bg-shadow';
import { FaRegSquare, FaRegSquareCheck } from 'react-icons/fa6';
import { API_SERVER } from '@/configs/api-path.js';
import { formatDateForDisplay } from '@/utils/date';

export default function Logcard({
  diaryData = null, // 接收完整的日誌數據
  showCheckbox = false,
  isSelected = false,
  onSelect = () => {},
  onDiaryClick = () => {},
}) {
  // 解構diaryData中的數據
  const {
    date = '',
    site_name = '',
    bottom_time = '',
    water_temp = '',
    max_depth = '',
    method_name = '',
    is_privacy = '',
    log_id,
  } = diaryData || {};

  // 使用 diaryData 中的圖片（如果有的話）
  const mainImage = diaryData?.images?.find((img) => img.is_main)?.img_url
    ? `${API_SERVER}${diaryData.images.find((img) => img.is_main).img_url}`
    : '/siteimg.JPG';

  return (
    <button
      className={styles['container']}
      onClick={() => onDiaryClick(log_id)}
    >
      {/* 圖片的位置 */}
      <div className={`${styles['imgContainer']}`}>
        <div className={`${styles['tagContainer']}`}>
          <TagGlass>
            {is_privacy === 0 || is_privacy === '0' ? '私人' : '公開'}
          </TagGlass>
          {showCheckbox && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                onSelect();
              }}
              role="button"
              tabIndex="0"
              onKeyDown
            >
              {isSelected ? <FaRegSquareCheck /> : <FaRegSquare />}
            </div>
          )}
        </div>
        <img src={mainImage} alt={`${site_name}的圖片`} />
      </div>

      {/* 日期的位置 */}
      <div className={`${styles['dateContainer']}`}>
        <div className={`${styles['iconContainer']}`}>
          <FaRegCalendar />
        </div>
        <p>{formatDateForDisplay(date)}</p>
      </div>
      {/* 潛點名稱的位置 */}
      <h5>{site_name}</h5>
      {/* 日誌標籤的位置 */}
      <div className={`${styles['minitag']}`}>
        <MiniTag type={method_name === '船潛' ? 'boat' : 'shore'} />
        <MiniTag type="time" bottom_time={bottom_time} />
        <MiniTag type="temp" water_temp={water_temp} />
        <MiniTag type="depth" max_depth={max_depth} />
      </div>
    </button>
  );
}
