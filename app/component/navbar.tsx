import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

interface NavBarProps {
  setProducts: React.Dispatch<React.SetStateAction<any[]>>;
}

const NavBar: React.FC<NavBarProps> = ({ setProducts }) => {
  const [search, setSearch] = useState('');
  const [rating, setRating] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('/api/products', {
        params: {
          search,
          rating,
          priceMin,
          priceMax,
        },
      });
      setProducts(response.data.products);
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };

  return (
    <nav className="p-4 bg-gray-200">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 mr-2 text-black"
      />
      <input
        type="number"
        placeholder="Min Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 mr-2 text-black"
      />
      <input
        type="number"
        placeholder="Min Price"
        value={priceMin}
        onChange={(e) => setPriceMin(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 mr-2 text-black"
      />
      <input
        type="number"
        placeholder="Max Price"
        value={priceMax}
        onChange={(e) => setPriceMax(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 mr-2 text-black"
      />
      <button onClick={handleSearch} className="px-3 py-1 bg-blue-500 text-white rounded">
        Search
      </button>
      <div>
        <Link href="/" className="mr-4 text-black">
          Home
        </Link>
        <Link href="/history" className="mr-4 text-black">
          History
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

