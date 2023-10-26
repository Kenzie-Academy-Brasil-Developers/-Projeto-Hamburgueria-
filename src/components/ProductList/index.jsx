import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss";
export const ProductList = ({ filteredProduts, addCart }) => {
  return (
    <ul className={styles.cardList}>
      {filteredProduts.map((product) => (
        <ProductCard addCart={addCart} key={product.id} product={product} />
      ))}
    </ul>
  );
};
