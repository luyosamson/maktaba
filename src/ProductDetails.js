// ProductDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // get product id from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from the API
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error('Failed to fetch product:', err));
  }, [id]);

  if (!product) {
    return <div className="text-center py-10">Loading product...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</Link>

      {/* Product Card */}
      <div className="bg-white shadow-lg rounded p-6 flex flex-col md:flex-row items-center gap-6">
        <img src={product.image} alt={product.title} className="w-48 h-60 object-contain" />

        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 text-sm mb-2">{product.category}</p>
          <p className="text-lg font-semibold text-green-600 mb-4">${product.price}</p>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
