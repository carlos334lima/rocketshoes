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

function Cart({ product, dispatch }) {

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
                    <button>
                      <MdRemoveCircleOutline size={20} color="#7159c1" />
                    </button>
                    <input type="number" readOnly value={product.amount}/>
                    <button onClick={() => {}}>
                      <MdAddCircleOutline size={20} color="#7159c1" />
                    </button>
                  </td>
                  <td>
                    <strong>R$ 258,80</strong>
                  </td>
                  <td>
                    <button onClick={() => dispatch({ type: 'REMOVE_CART', id: product.id})}>
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

export default connect(mapStateToProps)(Cart);
