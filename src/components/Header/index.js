import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { MdShoppingBasket } from "react-icons/md";

import { formatPrice } from "../../util/format";
import { Container, Cart, Dropdown } from "./styles";

import logo from "../../assets/images/logo.svg";

function Header() {

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>1 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}



export default Header;
