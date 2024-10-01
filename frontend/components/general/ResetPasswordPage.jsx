'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import axios from 'axios';
import InputField from '../InputField';
import SubmitButton from '../SubmitButton';

const ResetPassword = () => {
  const token = useSelector((state) => state.token.token); // Access the token from Redux
  const router = useRouter();
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Use effect to verify the token and get user ID
  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setErrorMessage('No token found.');
        return;
      }

      try {
        const response = await axios.post(`http://localhost:3001/api/v1/users/verifyToken/${token}`);
        setUserId(response.data.userId); // Store the user ID
      } catch (error) {
        setErrorMessage('Invalid or expired token.');
        console.error('Token verification failed:', error);
      }
    };

    verifyToken();
  }, [token]);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match!");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:3001/api/v1/users/changePassword`, {
        userId,
        password,
        passwordConfirm: confirmPassword,
      });
      console.log(response.data);
      setSuccessMessage('Password has been successfully reset!');
      // Optionally, navigate to the login page
       router.push('/login');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'An error occurred while resetting the password.');
      console.error('Password reset failed:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form className="space-y-6" onSubmit={handleResetPassword}>
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        {successMessage && <p className="text-blue-500 text-sm">{successMessage}</p>}
        <InputField
          label="New Password"
          type="password"
          id="password"
          placeholder="Enter your new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          label="Confirm New Password"
          type="password"
          id="confirm-password"
          placeholder="Confirm your new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <SubmitButton text="Reset Password" />
      </form>
    </div>
  );
};

export default ResetPassword;
