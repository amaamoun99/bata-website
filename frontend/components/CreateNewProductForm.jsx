'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import InputField from './InputField';
import SelectField from './SelectField';
import SubmitButton from './SubmitButton';
import axios from 'axios';

const CreateNewProductForm = () => {
  const [productType, setProductType] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [smallStock, setSmallStock] = useState('');
  const [mediumStock, setMediumStock] = useState('');
  const [largeStock, setLargeStock] = useState('');
  const [error, setErrorMessage] = useState('');

  // Get the JWT token from Redux
  const token = useSelector((state) => state.auth.jwt);

  const options = [
    { label: 'T-shirt', value: 't-shirts' },
    { label: 'Socks', value: 'socks' },
    { label: 'Boxer', value: 'boxers' },
    { label: 'Sun Glasses', value: 'sun-glasses' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input validation (basic example)
    if (!name || !price || !productType) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    try {
      console.log('Submitting:', {
        name,
        price,
        productType,
        description,
        smallStock,
        mediumStock,
        largeStock,
      });
      console.log('Token:', token);

      // Axios request with Authorization header
      const response = await axios.post(
        'http://localhost:3001/api/v1/products',
        {
          name,
          price,
          productType,
          description,
          smallStock,
          mediumStock,
          largeStock,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Set Authorization header here
          },
          withCredentials: true,
        }
      );
      
      console.log('Response:', response.data);
    } catch (error) {
      // Handle error response and set error message
      setErrorMessage(error.response?.data?.message || 'An error occurred during signup');
      console.error('Signup failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Name"
        type="text"
        id="productName"
        placeholder="Enter product's name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        label="Price"
        type="number"
        id="productPrice"
        placeholder="Enter product's Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <InputField
        label="Description"
        type="text"
        id="productDescription"
        placeholder="Enter product's Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <InputField
        label="Small Sized Stock"
        type="number"
        id="productSmallStock"
        placeholder="Enter the number of small sized stock"
        value={smallStock}
        onChange={(e) => setSmallStock(e.target.value)}
      />
      <InputField
        label="Medium Sized Stock"
        type="number"
        id="productMediumStock"
        placeholder="Enter the number of medium sized stock"
        value={mediumStock}
        onChange={(e) => setMediumStock(e.target.value)}
      />
      <InputField
        label="Large Sized Stock"
        type="number"
        id="productLargeStock"
        placeholder="Enter the number of large sized stock"
        value={largeStock}
        onChange={(e) => setLargeStock(e.target.value)}
      />
      <SelectField
        options={options}
        name="product type"
        className="p-2 border border-gray-300 rounded"
        placeholder="Please select an option"
        value={productType}
        onChange={(event) => setProductType(event.target.value)}
      />
      <p>Selected Value: {productType}</p>

      {error && <p className="text-red-500">{error}</p>} {/* Display error messages */}

      <SubmitButton text="Submit" />
    </form>
  );
};

export default CreateNewProductForm;
