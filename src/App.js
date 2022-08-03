import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import { useEffect, useState } from "react";
import { getProducts } from "./services/FakeStoreApi";
import { useNavigate } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getProducts(setProducts).then(setIsFetching(false));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          {isFetching && products.length > 0 && products ? (
            <Route path="/home" element={<p>is loading ...</p>} />
          ) : (
            <Route path="/home" element={<Home products={products} />} />
          )}
          <Route path="/about" element={<About />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
