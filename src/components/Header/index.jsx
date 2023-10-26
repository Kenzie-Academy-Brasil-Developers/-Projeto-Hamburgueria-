import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ({ setSearch, setModalOpen, countProduct }) => {
  const [value, setValue] = useState("");
  const searchValue = value.toLowerCase();

  const submit = (e) => {
    e.preventDefault();
    setSearch(value);
  };

  return (
    <header className={styles.header}>
      <img src={Logo} className={styles.logo} alt="Logo Kenzie Burguer" />
      <div className={styles.btnHeader}>
        <button className={styles.btnCart} onClick={() => setModalOpen(true)}>
          <MdShoppingCart size={21} />
          <span className={styles.btnCount}>{countProduct}</span>
        </button>

        <form className={styles.btnSearch} onSubmit={submit}>
          <input
            className={styles.input}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="btn" type="submit">
            <MdSearch size={21} />
          </button>
        </form>
      </div>
    </header>
  );
};
