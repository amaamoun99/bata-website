'use client'
import React,{useEffect,useState} from 'react';
import Link from 'next/link';
import { isAdmin,getToken,isAuthenticated } from "../../../hooks/useAuth";
import { useRouter } from 'next/navigation';


const InventoryPage = () => {
  const [isLoading,setIsLoading] = useState(true)
  const router = useRouter()
  
  useEffect(()=>{
   isAdmin()?setIsLoading(false):router.push('/login')

  })

  const products = [
    { name: 'T-shirts', href: '/admin/inventory/t-shirts' },
    { name: 'Boxers', href: '/admin/inventory/boxers' },
    { name: 'Sun Glasses', href: '/admin/inventory/sun-glasses' },
    { name: 'Socks', href: '/admin/inventory/socks' },
  ];

  return (
    <>
    {isLoading?"loading":
    <div className="flex flex-wrap justify-center items-center p-4 bg-gray-100 min-h-screen">
      {products.map((product) => (
        <Link key={product.name} href={product.href}>
          <div className="bg-white shadow-lg rounded-lg m-4 p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-lg font-bold text-gray-800 text-center">{product.name} Inventory</h2>
          </div>
        </Link>
      ))}
    </div>
}</>);
};

export default InventoryPage;
