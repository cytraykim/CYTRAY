import React, { useState, useEffect } from 'react';

const Food = () => {
  const [cocktails, setCocktails] = useState([]);
  const [filteredCocktails, setFilteredCocktails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/cocktails');
        const data = await response.json();
        setCocktails(data);
        setFilteredCocktails(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter by price
  const filterPrice = (price) => {
    const filtered = cocktails.filter((cocktail) => cocktail.price === price);
    setFilteredCocktails(filtered);
  };

  // Reset filters
  const resetFilters = () => {
    setFilteredCocktails(cocktails);
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Cocktails
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('KES 800')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              KES 800
            </button>
            <button
              onClick={() => filterPrice('KES 850')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              KES 850
            </button>
            <button
              onClick={() => filterPrice('KES 900')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              KES 900
            </button>
            {/* Add more buttons for other price ranges */}
            <button
              onClick={resetFilters}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Display cocktails */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {filteredCocktails.map((cocktail, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={cocktail.image}
              alt={cocktail.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{cocktail.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {cocktail.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
