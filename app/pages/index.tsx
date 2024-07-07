'use client';  // Aggiungo questa riga per assicurarmi che sia trattato come Client Component

import { useState } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: number;
}

export default function Home1() {
  const [search, setSearch] = useState('');
  const [rating, setRating] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/search`, {
        params: { search, rating, priceMin, priceMax }
      });
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  return (
    <div className="container mx-auto px-4">
    <nav className="py-4">
      <input
        type="text"
        placeholder="Search"
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
        <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-1">
          Search
        </button>
      </nav>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="border border-gray-300 p-4 rounded">
              <img src={product.image} alt={product.title} className="w-full mb-2 rounded" />
              <h3 className="font-bold text-lg">{product.title}</h3>
              <p className="text-gray-600">Price: ${product.price}</p>
              <p className="text-gray-600">Category: {product.category}</p>
              <p className="text-gray-600">Rating: {product.rating}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}




