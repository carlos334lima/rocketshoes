import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import { Provider } from "react-redux";
/* import { ToastContainer } from "react-toastify"; */

import GlobalStyle from "./style/global";
import Routes from "./routes";
import Header from "./components/Header";

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;