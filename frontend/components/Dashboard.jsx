"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamic import to prevent server-side rendering of Plotly
const PlotlyChart = dynamic(() => import('react-plotly.js'), { ssr: false });

const Dashboard = () => {
  // Sample user data
  const user = {
    name: 'John Doe',
    imageUrl: '/images/duck wallpaper.jpg', // Update this to the actual path of the image
  };

  // Sample data for the charts
  const salesData = {
    x: ['January', 'February', 'March', 'April', 'May'],
    y: [10, 15, 13, 17, 22],
    type: 'scatter',
    mode: 'lines+markers',
    marker: { color: 'blue' },
  };

  const productData = {
    labels: ['T-shirts', 'Sunglasses', 'Socks', 'Boxers'],
    values: [30, 40, 20, 10],
    type: 'pie',
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-6">
        
        {/* User Information */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Image
              src={user.imageUrl}
              alt="User Avatar"
              width={80}
              height={80}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold text-gray-700">{user.name}</h1>
          </div>
        </div>

        {/* Dashboard Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Sales Chart */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Monthly Sales</h2>
            <PlotlyChart
              data={[salesData]}
              layout={{ title: 'Sales Over Time', autosize: true }}
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Product Distribution Chart */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Product Distribution</h2>
            <PlotlyChart
              data={[productData]}
              layout={{ title: 'Product Categories', autosize: true }}
              style={{ width: '100%', height: '100%' }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
