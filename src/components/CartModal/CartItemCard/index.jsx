import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";
export const CartItemCard = ({ product, removeCart }) => {
  return (
    <li className={styles.modalList}>
      <div className={styles.modalContent}>
        <img src={product.img} alt={product.name} className={styles.modalImg} />
        <div className={styles.heading}>
          <h3 className="modalText modalname">{product.name}</h3>
          <span className={styles.modalValue}>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </div>
      <button
        className={styles.modalBtnDelete}
        onClick={() => removeCart(product.id)}
        aria-label="delete"
        title="Remover item"
      >
        <MdDelete size={21} />
      </button>
    </li>
  );
};
