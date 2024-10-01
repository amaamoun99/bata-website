'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/authSlice';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import InputField from '@/components/InputField';
import SubmitButton from '@/components/SubmitButton';

const Verification = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [token, setTokenInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleVerification = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:3001/api/v1/users/verifyToken/${token}`);
      console.log(response.data);
      setSuccessMessage('Token is valid! You can now reset your password.');

      // Store the token in Redux
      dispatch(setToken(token));

      // Navigate to the reset password page
      router.push('/reset-password');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'An error occurred while verifying the token.');
      console.error('Verification failed:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form className="space-y-6" onSubmit={handleVerification}>
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        {successMessage && <p className="text-blue-500 text-sm">{successMessage}</p>}
        <InputField
          label="Reset Token"
          type="text"
          id="token"
          placeholder="Enter your reset token"
          value={token}
          onChange={(e) => setTokenInput(e.target.value)}
        />
        <SubmitButton text="Verify Token" />
      </form>
    </div>
  );
};

export default Verification;
