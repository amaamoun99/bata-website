'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import InputField from './InputField';
import SelectField from './SelectField';
import SubmitButton from './SubmitButton';
import axios from 'axios';

const CreateNewProductForm = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [smallStock, setSmallStock] = useState('');
  const [mediumStock, setMediumStock] = useState('');
  const [largeStock, setLargeStock] = useState('');
  const [error, setErrorMessage] = useState('');

  // Get the JWT token from Redux
  const token = useSelector((state) => state.token.token); // Adjust state path as necessary
 
  const options = [
    { label: 'T-shirt', value: 't-shirts' },
    { label: 'Socks', value: 'socks' },
    { label: 'Boxer', value: 'boxers' },
    { label: 'Sun Glasses', value: 'sun-glasses' },
  ];

  const handleSubmit = async (e) => {
 
    e.preventDefault();
    console.log(token)
    try {
      // Axios request with Authorization header
      const response = await axios.post(
        'http://localhost:3001/api/v1/products',
        {
           name,
           price,
          selectedValue,
           description,
           smallStock,
           mediumStock,
           largeStock,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include JWT token
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'An error occurred');
      console.error('Failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="name"
        type="text"
        id="productName"
        placeholder="Enter product's name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        label="price"
        type="number"
        id="productPrice"
        placeholder="Enter product's Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <InputField
        label="description"
        type="text"
        id="productDescription"
        placeholder="Enter product's Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <InputField
        label="small sized stock"
        type="number"
        id="productSmallStock"
        placeholder="Enter the number of small sized stock"
        value={smallStock}
        onChange={(e) => setSmallStock(e.target.value)}
      />
      <InputField
        label="medium sized stock"
        type="number"
        id="productMediumStock"
        placeholder="Enter the number of medium sized stock"
        value={mediumStock}
        onChange={(e) => setMediumStock(e.target.value)}
      />
      <InputField
        label="Large sized stock"
        type="number"
        id="productLargeStock"
        placeholder="Enter the number of Large sized stock"
        value={largeStock}
        onChange={(e) => setLargeStock(e.target.value)}
      />
      <SelectField
        options={options}
        name="product type"
        className="p-2 border border-gray-300 rounded"
        placeholder="Please select an option"
        value={selectedValue}
        onChange={(event) => setSelectedValue(event.target.value)}
      />
      <p>Selected Value: {selectedValue}</p>

      <SubmitButton text="submit" />
    </form>
  );
};

export default CreateNewProductForm;
