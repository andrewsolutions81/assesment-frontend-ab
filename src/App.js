import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
        </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
