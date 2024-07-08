
// pages/history.tsx (o index.tsx se nella cartella pages)

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface SearchHistoryItem {
  search: string;
  rating: string;
  priceMin: string;
  priceMax: string;
}

const History = () => {
  const [history, setHistory] = useState<SearchHistoryItem[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    } else {
      setHistory([]);
    }
  }, []);

  const clearHistory = () => {
    localStorage.removeItem('searchHistory');
    setHistory([]);
  };

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <a className="text-white hover:text-gray-300">Search</a>
          </Link>
          <Link href="/history">
            <a className="text-white hover:text-gray-300">History</a>
          </Link>
        </div>
      </nav>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold py-4">Search History</h1>
        <button onClick={clearHistory} className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-1 mb-4">
          Clear History
        </button>
        <ul className="list-disc list-inside">
          {history.map((item, index) => (
            <li key={index} className="text-gray-600 mb-2">
              Search: {item.search}, Rating: {item.rating}, Min Price: {item.priceMin}, Max Price: {item.priceMax}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default History;
