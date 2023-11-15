import React, { useState, useEffect } from 'react';

export default function Offers({ addToCart }) {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/offers');
        const data = await response.json();
        setOffers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
      {offers.map((offer) => (
        <div key={offer.id} className='rounded-xl relative my-4 hover:scale-105 duration-300'>
          {/* overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>{offer.name}</p>
            <p className='px-2'>{offer.description}</p>
            <button onClick={() => addToCart(offer)} className='border-white bg-white text-black mx-2 absolute bottom-4'>
              Explore Now
            </button>
          </div>
          <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src={offer.image}
            alt={offer.name}
          />
        </div>
      ))}
    </div>
  );
}