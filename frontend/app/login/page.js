// app/login/page.js
import React from 'react';
import LoginFormWrapper from '../../components/wrappers/LoginWrapper';

export default function page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400">
      <div className="max-w-md w-full bg-duckWhite rounded-lg shadow-lg p-8">
        {/* Duck-themed Header */}
        <h2 className="text-3xl text-center mb-6 text-duckYellow font-bold">Welcome to Duck Pond</h2>
        <LoginFormWrapper />
        <p className="text-center text-sm mt-6 text-duckDarkBlue">
          Quack your way in. Welcome to the pond!
        </p>
        <p className="mt-4 text-sm text-center text-gray-600">
          Dont have an account?{' '}
          <a href="/signup" className="text-duckYellow hover:underline">
            Waddle Up
          </a>
        </p>
        <p className="mt-4 text-sm text-center text-gray-600">
          Forgot your password?{' '}
          <a href="/forgotPassword" className="text-duckYellow hover:underline">
            reset it
          </a>
        </p>
      </div>
    </div>
  );
}
