import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose,AiFillHome } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { BiSolidOffer } from "react-icons/bi";
import { LiaCocktailSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import Cart from './Cart';

function Navbar({ cartItems, addToCart }) {
  const [nav, setNav] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center space-x-4'>
        <div onClick={() => setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <Link to='/home' className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          COCKTAIL <span className='text-red-500'> VOYAGE</span>
         </Link>
        {/* Navigation buttons */}
        <div className='hidden md:flex space-x-8'>
          <Link to='/home' className='text-gray-800 hover:text-red-500'> Home</Link>
          <Link to='/offers' className='text-gray-800 hover:text-red-500'>  Offers</Link>
          <Link to='/cocktails' className='text-gray-800 hover:text-red-500'>Cocktails</Link>
        </div>
      </div>

      {/* Cart button */}
      <button
        onClick={openCart} className='bg-black text-white hidden md:flex items-center py-2 rounded-full'
      >
        <BsFillCartFill size={20} className='mr-2' />
        Cart ({cartItems.length})
      </button>

      {/* Cart component */}
      {showCart && (
        <Cart cartItems={cartItems} addToCart={addToCart} closeCart={closeCart} />
      )}

      {/* Mobile Menu */}
      {nav ? (
        <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
      ) : (
        ''
      )}

      {/* Side draw menu */}
      <div
        className={
          nav? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
              : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose
          onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          COCKTAIL <span className=''>VOYAGE</span>
        </h2>
        <nav>
        <ul className='flex flex-col p-4 text-gray-800'>
          {/* Navigation links for mobile */}
            <li className='text-xl py-4 flex items-center'><AiFillHome size={25} className='mr-2' />
            <Link to='/home'>Home</Link>  </li>
            <li className='text-xl py-4 flex items-center'><BiSolidOffer size={25} className='mr-2' />
            <Link to='/offers'>Offers</Link></li>
            <li className='text-xl py-4 flex items-center'><LiaCocktailSolid size={25} className='mr-2' />
            <Link to='/cocktails'>Cocktails</Link></li>
        </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;