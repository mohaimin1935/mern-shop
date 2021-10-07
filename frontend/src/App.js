import { Route, Switch } from "react-router-dom";
import Notification from "./components/common/Notification";
import { ProductProvider } from "./contexts/ProductContext";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import Success from "./pages/Success";

function App() {
  return (
    <ProductProvider>
      <Notification />
      
      <Switch>
        
        <Route exact path="/">
          <Home />
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
        <Route exact path="/success">
          <Success />
        </Route>
  
      </Switch>
    </ProductProvider>
  );
}

export default App;
