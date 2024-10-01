"use client";
import React, { useState } from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { loginSuccess } from '@/redux/authSlice';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const dispatch = useDispatch(); // Initialize dispatch

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/v1/users/signin', {
        email,
        password,
      });
      // Dispatch the token to Redux store
      dispatch(loginSuccess(response.data.token)); // Assume the token is in response.data.token

      // Redirect to home page after successful login
      router.push('/');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'An error occurred during login');
      console.error('Login failed:', error);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleLogin}>
      {errorMessage && (
        <p className="text-red-500 text-sm">{errorMessage}</p>
      )}
      <InputField
        label="Duck Name"
        type="text"
        id="email"
        placeholder="Enter your duck name"
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
      <SubmitButton text="Waddle In" />
    </form>
  );
};

export default LoginForm;
