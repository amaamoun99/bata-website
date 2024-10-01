'use client'

import React, { useState } from 'react';
import axios from 'axios';

const EditProductModal = ({ product, onClose }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [productDiscount, setProductDiscount] = useState(product.productDiscount);
  const [productType, setProductType] = useState(product.productType);
  const [description, setDescription] = useState(product.description);
  const [smallStock, setSmallStock] = useState(product.smallStock);
  const [mediumStock, setMediumStock] = useState(product.mediumStock);
  const [largeStock, setLargeStock] = useState(product.largeStock);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      name,
      price,
      productDiscount,
      productType,
      description,
      smallStock,
      mediumStock,
      largeStock,
    };

    try {
      const response = await axios.patch(
        `http://localhost:3001/api/v1/products/${product._id}`,
        updatedProduct,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      
      console.log('Product updated:', response.data);
      onClose();
    } catch (error) {
      console.error('Error updating the product:', error);
    }
  };

  if (!product) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Product Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700">Product Discount (%)</label>
            <input
              type="number"
              value={productDiscount}
              onChange={(e) => setProductDiscount(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700">Product Type</label>
            <input
              type="text"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              rows="4"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700">Small Stock</label>
            <input
              type="number"
              value={smallStock}
              onChange={(e) => setSmallStock(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700">Medium Stock</label>
            <input
              type="number"
              value={mediumStock}
              onChange={(e) => setMediumStock(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700">Large Stock</label>
            <input
              type="number"
              value={largeStock}
              onChange={(e) => setLargeStock(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div className="col-span-2 flex justify-end mt-4">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
