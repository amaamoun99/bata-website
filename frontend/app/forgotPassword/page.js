// pages/reset-password/[token].jsx
import React from 'react';
import ForgotPaaswordForm from '@/components/ForgotPaaswordForm';


export default function page() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400">
        <div className="max-w-md w-full bg-duckWhite rounded-lg shadow-lg p-8">
          {/* Duck-themed Header */}
          <h2 className="text-3xl text-center mb-6 text-duckYellow font-bold">enter your email</h2>
          <ForgotPaaswordForm />
        </div>
      </div>
    );
  }
  