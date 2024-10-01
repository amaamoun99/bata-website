'use client'
import React, { useState } from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const ForgotPaaswordForm = () => {

const[email,setEmail] = useState('')
const[errorMessage,setErrorMessage] = useState('')
const[successMessage,setSuccessMessage] = useState('')

const router = useRouter();

const handleForgotPassword =async (e)=>{
e.preventDefault()

try {
    const response=await axios.post('http://localhost:3001/api/v1/users/forgotPassword',{
        email
    });
    router.push('/verification')
    console.log(response.data)
    setSuccessMessage('AN EMAIL HAS BEEN SENT TO RESET YOUR PASSWORD')
} catch (error) {
    // Handle error response and set error message
    setErrorMessage(error.response?.data?.message || 'An error occurred ');
    console.error('failed:', error);
}
};
  return ( 
    <form className="space-y-6" onSubmit={handleForgotPassword}>
        {errorMessage && (
        <p className="text-red-500 text-sm">{errorMessage}</p> // Display error message if it exists
      )}
      <InputField
      label="email"
      type="text"
      id="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <SubmitButton text='submit'/>
      {successMessage&& (<p className="text-blue-500 text-sm">{successMessage}</p>)}
    </form>    
  )
}

export default ForgotPaaswordForm