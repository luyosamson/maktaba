import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BrowseBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error('Error fetching books:', err));
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="px-4 py-16 bg-gray-50 min-h-screen">
      {/* Search Bar */}
      <div className="max-w-4xl mx-auto mb-10 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Browse Books</h2>
        <input
          type="text"
          placeholder="Search for books..."
          className="w-full md:w-1/2 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Books Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.length === 0 ? (
          <p className="col-span-full text-center text-gray-600">No books found.</p>
        ) : (
          filteredBooks.map((book) => (
            <Link
              to={`/product/${book.id}`}
              key={book.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300 block"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h4 className="text-lg font-semibold truncate">{book.title}</h4>
              <p className="text-sm text-gray-500 mb-2">{book.category}</p>
              <p className="text-green-600 font-bold">Ksh: {(book.price * 135).toFixed(2)}</p>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default BrowseBooks;
