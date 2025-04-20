// components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onResults }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);

    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();

      // Filter products by title or description (case insensitive)
      const filtered = data.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );

      onResults(filtered);
    } catch (error) {
      console.error('Search error:', error);
      onResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="max-w-xl mx-auto mb-6 flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Search books..."
        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="px-6 py-2 bg-blue-600 text-white rounded-r-full hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
    </div>
  );
};

export default SearchBar;
