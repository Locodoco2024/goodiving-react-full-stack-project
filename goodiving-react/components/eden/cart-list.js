import styles from './cart-list.module.css';
import SelectEllipseSm from './select-ellipse-sm';
import Image from 'next/image';
import { formatPrice } from '@/utils/formatPrice';
import router from 'next/router';
import { FaTrash } from 'react-icons/fa6';
import { toast } from 'react-hot-toast';

export default function CartList({
  cart = [],
  setCart = () => {},
  selectedProducts = [],
  setSelectedProducts = () => {},
  stockWarnings = {},
}) {
  // 商品選擇的狀態

  // 全選/取消全選功能
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedProducts(cart);
    } else {
      setSelectedProducts([]);
    }
  };

  // 單個商品選擇功能
  const handleSelectProduct = (product) => {
    // 檢查商品是否已經在selectedProducts中
    const isSelected = selectedProducts.some((sp) => sp.vid === product.vid);

    if (isSelected) {
      // 如果商品已經被選中，則從selectedProducts中移除
      setSelectedProducts(
        selectedProducts.filter((sp) => sp.vid !== product.vid)
      );
    } else {
      // 如果商品還沒被選中，則添加到selectedProducts中
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  // 刪除購物車商品
  const handleDecreaseProduct = async (productId) => {
    try {
      // 直接從當前購物車狀態找到目標商品
      const targetProduct = cart.find((product) => product.vid === productId);
      if (!targetProduct) {
        throw new Error('Product not found in cart');
      }

      // 呼叫 API
      await decreaseCartItem(productId);

      // 根據當前商品數量決定更新方式
      if (targetProduct.quantity === 1) {
        // 如果當前數量為1，則完全移除商品
        const newCart = cart.filter((product) => product.vid !== productId);
        const newSelectedProducts = selectedProducts.filter(
          (product) => product.vid !== productId
        );
        setCart(newCart);
        setSelectedProducts(newSelectedProducts);
      } else {
        // 否則減少數量
        const newCart = cart.map((product) => {
          if (product.vid === productId) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
          return product;
        });

        const newSelectedProducts = selectedProducts.map((product) => {
          if (product.vid === productId) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
          return product;
        });

        setCart(newCart);
        setSelectedProducts(newSelectedProducts);
      }
    } catch (error) {
      console.error('Error decreasing product quantity:', error);
      toast?.error('更新商品數量失敗，請稍後再試');
    }
  };

  const decreaseCartItem = async (vid) => {
    try {
      await fetch('http://localhost:3001/cart/decrease', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          vid: vid,
        }),
      });
    } catch (error) {
      console.error('Error deleting cart:', error);
    }
  };

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.checkbox}>
            <input
              type="checkbox"
              onChange={handleSelectAll}
              disabled={!cart.length > 0}
              checked={
                cart.length > 0 && cart.length === selectedProducts.length
              }
            />
          </th>
          <th></th>
          <th>商品資料</th>
          <th>售價</th>
          <th>尺寸/顏色</th>
          <th>數量</th>
          <th>小計</th>
          <th className={styles.delete}>操作</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {cart && cart.length > 0 ? (
          cart.map((product) => (
            <tr key={product.vid}>
              {/* Checkbox */}
              <td className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={selectedProducts.some(
                    (sp) => sp.vid === product.vid
                  )}
                  onChange={() => handleSelectProduct(product)}
                />
              </td>
              {/* 圖片 */}
              <td
                onClick={() => {
                  router.push(`/products/${product.id}`);
                }}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.imageContainer}>
                  <Image
                    priority
                    src={product.image}
                    alt={product.title}
                    width={120}
                    height={120}
                    className={styles.productImage}
                  />
                </div>
              </td>
              {/* 商品資料 */}
              <td>
                <h5 className={styles.title}>{product.title}</h5>
              </td>

              {/* 單件價格 */}
              <td className={styles.price}>{formatPrice(product.price)}</td>

              {/* 尺寸/顏色 */}
              <td className={styles.size}>
                <p>尺寸：{product.size}</p>
                <p>顏色：{product.color}</p>
              </td>

              {/* 數量 */}
              <td>
                <SelectEllipseSm
                  vid={product.vid}
                  cart={cart}
                  onChange={setCart}
                  selectedProducts={selectedProducts}
                  setSelectedProducts={setSelectedProducts}
                />
                {/* 庫存不足提示 */}
                {stockWarnings[product.vid] && (
                  <p style={{ color: 'red' }}>{stockWarnings[product.vid]}</p>
                )}
              </td>

              {/* 小計 */}
              <td className={styles.total}>
                {formatPrice(product.price * product.quantity)}
              </td>

              {/* 刪除按鈕 */}
              <td className={styles.delete}>
                <button
                  onClick={() => {
                    toast.success(`${product.title} \r\n 已從購物車刪除`, {
                      position: 'top-right',
                      style: {
                        border: '2px solid #023e8a',
                        padding: '16px',
                        color: '#023e8a',
                        backgroundColor: '#fff',
                      },
                      iconTheme: {
                        primary: '#023e8a',
                        secondary: '#fff',
                      },
                    });
                    handleDecreaseProduct(product.vid);
                  }}
                >
                  <FaTrash fontSize={22} />
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="8" style={{ textAlign: 'center' }}>
              購物車為空
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
