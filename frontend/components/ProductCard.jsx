'use client'; // Required for using hooks in components

import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter from App Router

export default function ProductCard({ product }) {
  const router = useRouter();

  const handleViewProduct = () => {
    // Navigate to the product overview page using the product ID
    router.push(`/productOverview/${product._id}`); // Adjust the path based on your routing
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <Image
        src={product.image} // Ensure this is the correct path to the image
        alt={product.title}
        width={300} // Adjust based on your design
        height={200} // Adjust based on your design
        className="w-full h-32 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-yellow-700">{product.title}</h3>
        <p className="text-gray-600">{product.description}</p>
        <p className="font-bold text-yellow-700">${product.price}</p>
        <button
          onClick={handleViewProduct}
          className="mt-4 bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-500"
        >
          View
        </button>
      </div>
    </div>
  );
}
