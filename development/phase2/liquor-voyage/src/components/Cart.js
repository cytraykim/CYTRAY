import React from 'react';

const Cart = ({ cartItems, closeCart }) => {
  return (
    <div className='fixed top-0 right-0 w-[300px] h-screen bg-white z-20'>
      <div className='p-4 flex justify-between items-center border-b'>
        <h3 className='text-2xl font-bold'>Shopping Cart</h3>
        <button onClick={closeCart} className='text-gray-500'>
          Close
        </button>
      </div>
      <div className='p-4'>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className='py-2'>
                {item.name} {item.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;