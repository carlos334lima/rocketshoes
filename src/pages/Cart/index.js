import React from "react";
import { connect } from "react-redux";
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

function Cart() {
  return (
    <Container>
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
        
            <tr>
              <td>
                <img
                  src=""
                  alt="image"
                />
              </td>
              <td>
                <strong>tenis legal</strong>
                <span>R$ 129</span>
              </td>
              <td>
                <button>
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly  />
                <button >
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </td>
              <td>
                <strong>R$ 258,80</strong>
              </td>
              <td>
                <button>
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
        
        </tbody>
      </ProductTable>

      <footer>
        <button>Finalizar pedido</button>

        <Total>
          <span>Total</span>
          <strong>R$ 1920,20</strong>
        </Total>
      </footer>
    </Container>
  );
}



export default Cart;
