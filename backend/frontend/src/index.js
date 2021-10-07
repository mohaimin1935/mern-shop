import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Layout from "./components/common/Layout";
import AuthProvider from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import "./index.css";

ReactDOM.render(
  <Router>
    <AuthProvider>
      <CartProvider>
        <Layout>
          <App />
        </Layout>
      </CartProvider>
    </AuthProvider>
  </Router>,
  document.getElementById("root")
);
