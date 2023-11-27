import './Navbar.css'
import logo from '../../Assets/logo.jpg'
import carticon from '../../Assets/cart_icon.png'
import {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Navbar = () => {
  const [menu, SetMenu ] = useState('shop');
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
     <div className='nav-logo'>
     <img src={logo} alt='' className='logo'/>
     <p>Apna Store</p>
     </div>
     <ul className='nav-menu'>
      <li onClick={() => {SetMenu('shop')}}> <Link  to={'/'}>Shop</Link>{menu==="shop" ? <hr /> : <></>}</li>
      <li onClick={() => {SetMenu('mens')}}><Link to={'/mens'}> Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
      <li onClick={() => {SetMenu('womens')}}><Link to={'/womens'}> Women</Link>{menu === "womens" ? <hr/> : <></>}</li>
      <li onClick={() => {SetMenu('kids')}}> <Link to={'/kids'}>Kids</Link>{menu === "kids" ? <hr/> : <></>}</li>
     </ul>
     <div className='nav-login-cart'>
     <Link to={'/login'}> <button>Login</button></Link>
      <Link to={'/cart'}><img src={carticon} alt='' className='cart'/></Link>
      <div className='nav-cart-count'>{getTotalCartItems()}</div>
     </div>
    </div>
  )
}

export default Navbar


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Icon } from '@iconify/react';
// import '../styles/Navbar.css';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
//       <div className="logo">
//         <Link to="/">
//           <img src="path/to/your/logo.png" alt="Logo" />
//         </Link>
//       </div>
//       <div className="menu-toggle" onClick={toggleMenu}>
//         {isMenuOpen ? (
//           <div className="close-button" onClick={toggleMenu}>
//             &times;
//           </div>
//         ) : (
//           <>
//             <div className="bar"></div>
//             <div className="bar"></div>
//             <div className="bar"></div>
//           </>
//         )}
//       </div>
//       <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
//         <li>
//           <Link to="/" onClick={toggleMenu}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/about" onClick={toggleMenu}>
//             About
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" onClick={toggleMenu}>
//             Contact Us
//           </Link>
//         </li>
//         <li>
//           <Link to="/products" onClick={toggleMenu}>
//             Products
//           </Link>
//         </li>
//         <li>
//           <Link to="/login" onClick={toggleMenu}>
//             Login
//           </Link>
//         </li>
//         <li>
//           <Link to="/cart" onClick={toggleMenu}>
//           <Icon icon="bytesize:cart" className='cart-menu'/>
        
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;