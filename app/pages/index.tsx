'use client';

import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: number;
}

interface SearchHistoryItem {
  search: string;
  rating: string;
  priceMin: string;
  priceMax: string;
}

export default function Home() {
  const [search, setSearch] = useState('');
  const [rating, setRating] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products/search', {
        params: { q: search, rating, priceMin, priceMax }
      });
      setProducts(response.data.products);

      // Salvataggio della ricerca nella cronologia
      saveSearchHistory({ search, rating, priceMin, priceMax });
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  const saveSearchHistory = (searchParams: SearchHistoryItem) => {
    const storedHistory = localStorage.getItem('searchHistory');
    let newHistory: SearchHistoryItem[] = storedHistory ? JSON.parse(storedHistory) : [];

    // Aggiungi la nuova ricerca all'inizio della cronologia
    newHistory.unshift(searchParams);

    // Limita la cronologia a un massimo di 10 elementi (puoi modificare questo numero secondo necessità)
    newHistory = newHistory.slice(0, 10);

    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
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
            <div
              key={product.id}
              className={`border border-gray-300 p-4 rounded cursor-pointer ${
                selectedProduct && selectedProduct.id === product.id ? 'bg-gray-200' : ''
              }`}
              onClick={() => handleProductSelect(product)}
            >
              <img
                src={`https://picsum.photos/seed/picsum/100`}
                alt={product.title}
                className="w-full mb-2 rounded"
              />
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
      <Link href="./history.tsx" className="text-blue-500 hover:underline mt-4 block">View Search History
      </Link>
    </div>
  );
}
