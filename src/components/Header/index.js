import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { MdShoppingBasket } from "react-icons/md";

import { formatPrice } from "../../util/format";
import { Container, Cart, Dropdown } from "./styles";

import logo from "../../assets/images/logo.svg";

function Header() {
  const cartSize = useSelector((state) => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default Header;
