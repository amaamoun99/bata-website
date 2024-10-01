import React from 'react';
import SignupForm from '@/components/SignupForm';

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-duckBackground">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-duckYellow mb-4">Join the Duck Squad</h2>
        <SignupForm />
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-duckYellow hover:underline">
            Waddle In
          </a>
        </p>
      </div>
    </div>
  );
};

export default page;

