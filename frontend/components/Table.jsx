import React, { useState } from 'react';
import EditProductModal from './EditProductModal';

const Table = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null); // State to hold selected product
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Function to handle edit button click
  const handleEditClick = (product) => {
    setSelectedProduct(product); // Set the selected product to the state
    setIsModalOpen(true); // Open the modal
  };

  return (
    <>
      <div className="max-h-96 overflow-auto"> {/* Add a container with scrolling */}
        <table className="table-auto w-full text-left text-white">
          <thead className="sticky top-0 bg-gray-800"> {/* Make the header sticky */}
            <tr>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Price Discount</th>
              <th className="px-4 py-2">Small Stock</th>
              <th className="px-4 py-2">Medium Stock</th>
              <th className="px-4 py-2">Large Stock</th>
              <th className="px-4 py-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-b border-gray-700">
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.price}</td>
                <td className="px-4 py-2">{product.productType}</td>
                <td className="px-4 py-2">{product.productDiscount}</td>
                <td className="px-4 py-2">{product.smallStock}</td>
                <td className="px-4 py-2">{product.mediumStock}</td>
                <td className="px-4 py-2">{product.largeStock}</td>
                <td className="px-4 py-2">
                  <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => handleEditClick(product)} // Open modal with product data
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Render Modal and pass selectedProduct as props */}
      {isModalOpen && (
        <EditProductModal
          product={selectedProduct}
          onClose={() => setIsModalOpen(false)} // Close modal handler
        />
      )}
    </>
  );
};

export default Table;
