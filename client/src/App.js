/*REACT-ROUTER-DOM*/
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/*IMPORTED-COMPONENTS*/
import Home from "../src/pages/Home/Home";
import ProductList from "../src/pages/ProductList/ProductList";
import Product from "../src/pages/Product/Product";
import Cart from "../src/pages/Cart/Cart";
import Success from "../src/pages/Success/Success";
import Login from "../src/pages/Login/Login";
import Register from "../src/pages/Register/Register";

function App() {
  const user = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate replace to="/" /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
