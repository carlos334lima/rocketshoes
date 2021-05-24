import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MdAddShoppingCart } from "react-icons/md";
import Loader from "react-loader-spinner";
import { formatPrice } from "../../util/format";

import api from "../../services/api";


import { ProductList, Loading } from "./style";

function Home(props) {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      setSneakers(response.data);
    });
  }, []);

  const {dispatch} = props;

  function handleAddProduct(product){

     dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })
  }

  return (
    <ProductList>
      {sneakers.map((product) => (
        <li key={product.id}>
          <img
            src={product.image}
            alt=""
          />

          <strong>{product.title}</strong>
          <span>{formatPrice(product.price)}</span>

          <button type="button" onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

/* const mapStateToprops = (state) => {
  return {
    state.
  } 
} */



export default connect()(Home);