import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Cocktails = ({ addToCart }) => {
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

  const filterItems = (key, value) => {
    const filtered = cocktails.filter(cocktail => cocktail[key] === value);
    setFilteredCocktails(filtered);
  };

  const resetFilters = () => setFilteredCocktails(cocktails);

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filtered = cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(searchValue));
    setFilteredCocktails(filtered);
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 text-center'>
      <h1 className='text-orange-600 font-bold text-4xl mb-4'>Top Rated Cocktails</h1>

      <div className='bg-gray-200 rounded-full flex items-center justify-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] mx-auto mb-4'>
        <AiOutlineSearch size={25} />
        <input
          onChange={handleSearch}
          className='bg-transparent p-2 focus:outline-none w-full'
          type='text'
          placeholder='Search Cocktail'
        />
      </div>

      <div className='flex flex-col lg:flex-row justify-center'>
        <div>
          <p className='text-orange-600 font-bold text-4xl mb-4'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            {[800, 850, 900].map((price, index) => (
              <button
                key={index}
                onClick={() => filterItems('price', `KES ${price}`)}
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              >
                {price}
              </button>
            ))}
            <button
              onClick={resetFilters}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {filteredCocktails.map((cocktail, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer'
            onClick={() => addToCart(cocktail)}
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

export default Cocktails;