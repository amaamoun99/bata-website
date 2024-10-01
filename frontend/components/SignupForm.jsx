"use client";
import React, { useState } from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // To store error messages
  
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Basic password validation
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    try {
      // Make POST request to backend API for signup
      const response = await axios.post('http://localhost:3001/api/v1/users/signup', {
        name,
        email,
        password,
        passwordConfirm: confirmPassword,
      });
      router.push('/');
      // Handle successful signup response
      console.log('Signup successful:', response.data);
      
      // Redirect or navigate to login page
    } catch (error) {
      // Handle error response and set error message
      setErrorMessage(error.response?.data?.message || 'An error occurred during signup');
      console.error('Signup failed:', error);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSignup}>
      {errorMessage && (
        <p className="text-red-500 text-sm">{errorMessage}</p> // Display error message if it exists
      )}
      <InputField
        label="Duck Name"
        type="text"
        id="name"
        placeholder="Enter your duck name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        label="Duck Email"
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="Duck Code"
        type="password"
        id="password"
        placeholder="Enter your secret code"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputField
        label="Confirm Duck Code"
        type="password"
        id="confirm-password"
        placeholder="Confirm your secret code"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <SubmitButton text="Join the Ducks" />
    </form>
  );
};

export default SignupForm;
