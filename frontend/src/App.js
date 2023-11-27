import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './routes/Products';
import Cart from './routes/Cart';
import Navbar from './components/navbar/Navbar';
import Shop from './routes/Shop';
import LoginSignup from './routes/LoginSignup';
import ShopCategory from './routes/ShopCategory';
import Footer from './components/footer/Footer';
import men_baner from './Assets/banner_mens.png';
import women_baner from './Assets/banner_women.png';
import kid_banner from './Assets/banner_kids.png'

function App() {
  return (
    <div>
  <Router>
      <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory banner={men_baner} category='mens' />} />
            <Route path="/womens" element={<ShopCategory banner={women_baner} category='womens' />} />
            <Route path="/kids" element={<ShopCategory banner={kid_banner} category='kids' />} />
            <Route path="/product" element={<Products />} >
              <Route path=':productId' element={<Products />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
          <Footer />
    </Router>
    </div>
  );
}

export default App;

