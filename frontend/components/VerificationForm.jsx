'use client';

import React, { useState } from 'react';
import InputField from '@/components/InputField';
import SubmitButton from '@/components/SubmitButton';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const VerificationPage = () => {
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const router = useRouter();

  const handleTokenVerification = async (e) => {
    e.preventDefault();

    try {
      // You might want to store the token in session/local storage for later use
      const response = await axios.post('http://localhost:3001/api/v1/users/verifyToken', {
        token,
      });
      console.log(response.data);
      setSuccessMessage('Token verified successfully!');
      router.push('/reset-password'); // Redirect to reset password page
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Invalid token, please try again.');
      console.error('Verification failed:', error);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleTokenVerification}>
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
      <InputField
        label="Verification Token"
        type="text"
        id="token"
        placeholder="Enter the token sent to your email"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <SubmitButton text="Verify Token" />
      {successMessage && <p className="text-blue-500 text-sm">{successMessage}</p>}
    </form>
  );
};

export default VerificationPage;
