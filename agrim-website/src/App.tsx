import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Exhibitions from './pages/Exhibitions';
import Gallery from './pages/Gallery';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productSlug" element={<ProductDetail />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  )
}

export default App
