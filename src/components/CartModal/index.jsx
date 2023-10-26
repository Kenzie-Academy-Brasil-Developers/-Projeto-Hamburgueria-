import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss";

export const CartModal = ({
  cartList,
  removeCart,
  setCartList,
  setModalOpen,
}) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  const removeAll = () => {
    setCartList([]);
  };
  return (
    <div className={styles.overlayBox} role="dialog">
      <div className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <h2 className={`modalText removeAll ${styles.heading}`}>
            Carrinho de compras
          </h2>

          <button
            className={styles.closeBtn}
            onClick={() => setModalOpen(false)}
            aria-label="close"
            title="Fechar"
          >
            <MdClose size={21} />
          </button>
        </div>
        <div className={styles.modalProduct}>
          <ul>
            {cartList.map((product) => (
              <CartItemCard
                key={product.id}
                removeCart={removeCart}
                product={product}
              />
            ))}
          </ul>
        </div>
        <div>
          <div className={styles.headline}>
            <span className="modalText modalname"> Total </span>
            <span className="valueModal">
              {parseInt(total).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <button
            className={`modalText removeAll ${styles.modalBtnRemove}`}
            onClick={() => removeAll()}
          >
            Remover todos
          </button>
        </div>
      </div>
    </div>
  );
};
