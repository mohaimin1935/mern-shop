import { Route, Switch } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import { ProductProvider } from "./contexts/ProductContext";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Shop from "./pages/Shop";

function App() {
  return (
    <ProductProvider>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/products">
            <Shop />
          </Route>
          <Route path="/products/:id">
            <ProductDetail />
          </Route>

          {/* <Route exact path='/register'>
          <About />
        </Route>
        
        
         */}
        </Switch>
      </AuthProvider>
    </ProductProvider>
  );
}

export default App;
