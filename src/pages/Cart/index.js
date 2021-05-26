import React from "react";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdRemoveShoppingCart,
} from "react-icons/md";

import { formatPrice } from "../../util/format";
import { Container, ProductTable, Total, EmptyCart } from "./style";

import { removeToCart } from "../../store/modules/cart/actions";

import * as CartActions from '../../store/modules/cart/actions';

function Cart({ product, removeToCart, updateAmount }) {

  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <Container>
      {product.length >= 1 ? (
        <>
          <ProductTable>
            <thead>
              <tr>
                <th />
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Subtotal</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {product.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} alt={product.title} />
                  </td>
                  <td>
                    <strong>{product.title}</strong>
                    <span>R$ {product.price}</span>
                  </td>
                  <td>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="text" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                  </td>
                  <td>
                    <strong>R$ 258,80</strong>
                  </td>
                  <td>
                    <button onClick={() => removeToCart(product.id)}>
                      <MdDelete size={20} color="#7159c1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>

          <footer>
            <button>Finalizar pedido</button>

            <Total>
              <span>Total</span>
              <strong>R$ 1920,20</strong>
            </Total>
          </footer>
        </>
      ) : (
        <h3>SEM ITENS</h3>
      )}
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    product: state.cart,
  };
};

const mapDispatchToProps = dispatch =>  /* converte action do redux */
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);