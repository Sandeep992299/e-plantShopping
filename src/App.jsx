import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="landing">
            <h1>🌿 Paradise Nursery</h1>
            <p>Bring Nature Home</p>
            <Link to="/products">
              <button className="btn-get-started">Get Started</button>
            </Link>
          </div>
        } />
        <Route path="/products" element={
          <>
            <Navbar />
            <ProductList />
          </>
        } />
        <Route path="/cart" element={
          <>
            <Navbar />
            <Cart />
          </>
        } />
        <Route path="/about" element={
          <>
            <Navbar />
            <AboutUs />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
