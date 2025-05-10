import React, { useState, useEffect } from 'react';
import Products from '../assets/Product';
import DescriptionWithReadMore from './Desciption';
import category from '../assets/Categories';



const Home = ({setCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(Products);

  
  

  useEffect(() => {
    let filtered = [...Products];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(product =>
        product.category.name === selectedCategory
      );
    }

    // Sort
    if (sortOrder === 'lowToHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'highToLow') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, sortOrder]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      let updatedCart;
  
      if (existingItem) {
        // If the item exists, increment its quantity by 1
        updatedCart = prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If it's a new item, add it to the cart with quantity 1
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }
  
      // Save the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  
  

  return (
    <div className='flex max-w-7xl mx-auto justify-center flex-col'>
      <div className="w-full px-6 py-4  ">
        <h2 className="text-2xl text-gray-500 mb-2">Filter options</h2>
        <div className="flex flex-wrap w-full gap-4 items-center justify-between">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by product name..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-1/5 h-14 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-1/5 h-14 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All Categories</option>
            {category.map((cat, index) => (
              <option key={index} value={cat.name}>{cat.name}</option>
            ))}
          </select>

          {/* Price Sort Dropdown */}
          <select
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-1/5 h-14 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Sort by Price</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>

      <div className='flex flex-wrap gap-8 w-full justify-center items-center'>
        <div className='flex flex-wrap gap-8 w-[95%] justify-center'>
        {filteredProducts.map((item, index) => (
          <div key={index} className='flex flex-col w-1/5 rounded-md justify-between p-4 bg-[#AFAFAD]'>
            <img src={item.category.image} alt={item.category.name} className='w-full' />
            <div className='flex justify-between items-center mt-2'>
              <h1 className='text-xl font-bold'>{item.title}</h1>
              <span className='text-sm text-gray-600'>({item.category.name})</span>
            </div>
            <p className='text-lg font-semibold my-1'>${item.price}</p>
            <DescriptionWithReadMore text={item.description} />
            <button
  className='mt-2 w-full rounded-md bg-amber-300 text-black text-xl py-1'
  type="button"
  onClick={() => addToCart(item)}
>
  ADD TO Cart
</button>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
