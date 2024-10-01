"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../../components/ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]); // Initial state as an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/v1/products?productType=boxers', {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // Check if the response is an array before setting it
        if (Array.isArray(response.data.data.data)) {
          setProducts(response.data.data.data); // Correctly set the products
        } else {
          throw new Error('Response is not an array');
        }
      } catch (error) {
        setError(error.response ? error.response.data.message : error.message);
      } finally {
        setLoading(false); // Ensure loading state is managed here
      }
    };

    fetchProducts();
  }, []); // Dependency array ensures this runs only once

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center text-3xl font-bold text-white">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <div className="text-center">No products available</div>
        )}
      </div>
    </div>
  );
}
