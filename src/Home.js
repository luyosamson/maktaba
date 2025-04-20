
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // at the top
import './index.css';
import './SearchBar';
import './Footer'

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 10)))
      .catch((err) => console.error('Failed to fetch books:', err));
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-100 py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-bounce">Discover Your Next Favorite Book</h2>
        <p className="text-base md:text-lg mb-6">Dive into a world of stories, knowledge, and imagination</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800 transition">Browse Collection</button>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50 px-4">
        <h3 className="text-2xl font-semibold text-center mb-10">Shop by Category</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {['Fiction', 'Masculinity', 'Business', 'Biography', 'Self-help'].map((category, index) => (
            <div key={index} className="bg-white shadow p-4 text-center rounded hover:shadow-lg cursor-pointer">
              <p className="font-medium text-blue-600">{category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Read Section */}
      <section className="py-16 px-4">
  <h3 className="text-2xl font-semibold text-center mb-10">Top Reads</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {books.slice(0, 4).map((book, index) => {
      const kshPrice = (book.price * 135).toFixed(0);
      const authors = ['Ngugi wa Thiong\'o', 'Chinua Achebe', 'Yvonne Owuor', 'Binyavanga Wainaina'];
      const author = authors[index % authors.length];

      return (
        <Link
          to={`/product/${book.id}`}
          key={book.id}
          className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
        >
          {/* Book Image */}
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-48 object-contain p-4"
          />

          {/* Info */}
          <div className="p-4">
            <h4 className="font-semibold text-lg mb-1 truncate">{book.title}</h4>
            <p className="text-sm text-gray-500 italic mb-1">By {author}</p>
            <p className="text-sm font-semibold text-green-600">Ksh: {kshPrice}</p>
          </div>
        </Link>
      );
    })}
  </div>
</section>


      {/* Recent Books */}
      <section className="py-16 bg-gray-100 px-4">
  <h3 className="text-2xl font-semibold text-center mb-10">Recently Added</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {books.slice(0, 8).map((book, index) => {
      const kshPrice = (book.price * 135).toFixed(0);
      const authors = ['Margaret Ogola', 'Meja Mwangi', 'Ali Mazrui', 'Wangari Maathai'];
      const author = authors[index % authors.length];

      return (
        <Link
          to={`/product/${book.id}`}
          key={book.id}
          className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
        >
          {/* Book image */}
          <img
            src={book.image}
            alt={book.title}
            className="h-40 w-full object-contain p-4 bg-white"
          />

          {/* Book info */}
          <div className="p-4 text-center">
            <h4 className="font-semibold text-base truncate">{book.title}</h4>
            <p className="text-sm text-gray-500 italic mt-1">By {author}</p>
            <p className="text-sm text-gray-600 mt-1">Category: {book.category}</p>
            <p className="text-sm text-green-600 font-semibold mt-1">Ksh: {kshPrice}</p>
          </div>
        </Link>
      );
    })}
  </div>
</section>





      {/* Top Authors */}
      <section className="py-16 px-4">
        <h3 className="text-2xl font-semibold text-center mb-10">Top Authors</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: "Ngugi wa Thiong'o", img: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Ngugi_wa_Thiong%27o_%28cropped%29.jpg" },
            { name: 'Chinua Achebe', img: "https://upload.wikimedia.org/wikipedia/en/7/73/Chinua_Achebe_%28cropped%29.jpg" },
            { name: 'Binyavanga Wainaina', img: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Binyavanga_Wainaina_2010.jpg" },
            { name: 'Yvonne Owuor', img: "https://upload.wikimedia.org/wikipedia/commons/6/60/Yvonne_Adhiambo_Owuor_2018.jpg" },
          ].map((author, index) => (
            <div key={index} className="bg-blue-50 shadow p-4 rounded w-full sm:w-52 text-center">
              <img src={author.img} alt={author.name} className="w-24 h-24 object-cover mx-auto rounded-full mb-2" />
              <p className="text-lg font-medium text-blue-600">{author.name}</p>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
};

export default Home;
