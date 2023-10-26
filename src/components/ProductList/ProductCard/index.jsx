import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./style.module.scss";

export const ProductCard = ({ product, addproducts, addCart }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");
  const [buttonHover, setButtonHover] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = { id: uuidv4(), name, category, price, img };

    addproducts(newProduct);

    setName("");
    setCategory("");
    setPrice(0);
    setImg("");
  };

  return (
    <li
      className={`${styles.productCard} ${buttonHover ? styles.hover : ""}`}
      onSubmit={handleSubmit}
    >
      <div>
        <div className={styles.cardContent}>
          <img
            className={styles.productImg}
            src={product.img}
            alt={product.name}
          />
        </div>
        <div className={styles.productCardMain}>
          <h3 className="name">{product.name}</h3>
          <span className="name category"> {product.category} </span>
          <span className="name value">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <button
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
            onClick={() => addCart(product)}
            className="btn"
          >
            Adicionar
          </button>
        </div>
      </div>
    </li>
  );
};
