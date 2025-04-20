
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        fetch(`https://fakestoreapi.com/products/category/${data.category}`)
          .then(res => res.json())
          .then(relatedData => {
            const filtered = relatedData.filter(item => item.id !== data.id);
            setRelated(filtered.slice(0, 4));
          });
      });
  }, [id]);

  const addToCart = () => {
    alert(`Added ${quantity} of "${product.title}" to cart!`);
    // You can replace this with actual cart logic
  };

  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  if (!product) return <div className="text-center py-10">Loading product...</div>;

  const unitPriceKsh = product.price * 135;
  const totalPriceKsh = unitPriceKsh * quantity;

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Navigation Links */}
      <div className="flex justify-between mb-4">
      <Link to="/" className="text-blue-600 hover:underline">🏠 Back to Home</Link>
      <Link to="/books" className="text-blue-600 hover:underline">Continue Shopping →</Link>
        
      </div>

      {/* Product Info */}
      <div className="bg-white shadow rounded p-6 flex flex-col md:flex-row items-start gap-6">
        <img src={product.image} alt={product.title} className="w-64 h-80 object-contain rounded" />

        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-500 text-sm mb-1">{product.category}</p>

          {/* Star Ratings */}
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.round(product.rating?.rate || 0) ? 'text-yellow-400' : 'text-gray-300'}>
                ★
              </span>
            ))}
            <span className="text-sm text-gray-500 ml-2">
              ({product.rating?.count} reviews)
            </span>
          </div>

          {/* Price */}
          <p className="text-green-600 font-bold text-xl mb-4">
            Ksh {totalPriceKsh.toFixed(2)}
          </p>

          {/* Quantity Controls */}
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={decreaseQty}
              className="px-3 py-1 bg-gray-200 rounded text-lg hover:bg-gray-300"
            >
              −
            </button>
            <span>{quantity}</span>
            <button
              onClick={increaseQty}
              className="px-3 py-1 bg-gray-200 rounded text-lg hover:bg-gray-300"
            >
              +
            </button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={addToCart}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Synopsis */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">Synopsis</h3>
        <p className="text-sm text-gray-700 leading-relaxed">{product.description}</p>
      </div>

      {/* Related Books */}
{/* Related Books */}
<div className="mt-10">
  <h3 className="text-xl font-semibold mb-4">Related Books</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {related.map(book => {
      const kshPrice = (book.price * 135).toFixed(2);
      const author = book.category || "Unknown Author"; // assuming category as author for demo

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
</div>

    </div>
  );
};

export default ProductDetails;