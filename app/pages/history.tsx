

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface SearchHistoryItem {
  search: string;
  rating: string;
  priceMin: string;
  priceMax: string;
}

export default function History() {
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
      <Link href="/">
        <a className="text-blue-500 hover:underline mt-4 block">Back to Search</a>
      </Link>
    </div>
  );
}



