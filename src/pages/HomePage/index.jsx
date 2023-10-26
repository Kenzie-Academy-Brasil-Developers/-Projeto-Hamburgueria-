import { useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../components/services/api";
import { useEffect } from "react";

export const HomePage = () => {
  const data = localStorage.getItem("@CartList");
  const list = JSON.parse(data);
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState(data ? JSON.parse(data) : []);
  const [search, setSearch] = useState("");
  const [filteredProduts, setFilteredProduts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("@CartList", JSON.stringify(cartList));
  }, [cartList]);

  const addCart = (product) => {
    if (cartList.some((item) => item.id === product.id)) {
    } else {
      setCartList([...cartList, product]);
    }
  };

  const removeCart = (id) => {
    const listFiltered = cartList.filter((product) => product.id !== id);
    setCartList(listFiltered);
  };

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const { data } = await api.get("/products");

        setProductList(data);
      } catch (error) {
        console.error("Erro na requisição: ", error);
      }
    };
    loadProduct();
  }, []);

  useEffect(() => {
    const filteredProduts = productList.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProduts(filteredProduts);
  }, [search, productList]);

  return (
    <>
      <Header
        setSearch={setSearch}
        setModalOpen={setModalOpen}
        countProduct={cartList.length}
      />

      <main>
        <ProductList addCart={addCart} filteredProduts={filteredProduts} />
        {modalOpen ? (
          <CartModal
            setModalOpen={setModalOpen}
            cartList={cartList}
            setCartList={setCartList}
            removeCart={removeCart}
          />
        ) : null}
      </main>
    </>
  );
};
