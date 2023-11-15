import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Offers from './components/Offers';
import Cocktails from './components/Cocktails';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (cocktail) => setCartItems([...cartItems, cocktail]);

  return (
    <Router>
      <div>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route
            path="/home" element={[<Home key="home" />, <Offers key="offers" />,<Cocktails key="cocktails" addToCart={addToCart} />, <Footer key="footer" />,]}/>
          <Route path="/offers" element={<Offers />} />
          <Route path="/cocktails" element={<Cocktails addToCart={addToCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;