'use client'
import React,{useEffect,useState} from 'react'
import CreateNewProductFormWrapper from '@/components/wrappers/CreateNewProductFormWrapper'
import { isAdmin,getToken,isAuthenticated } from "../../../hooks/useAuth";
import { useRouter } from 'next/navigation';



const page = () => {
  const [isloading,setIsLoading] = useState(true)
  const router = useRouter()
  
  useEffect(()=>{
   isAdmin()?setIsLoading(false):router.push('/login')

  })


  return (

    <>
    {isloading?"loading":<CreateNewProductFormWrapper/> }
    </>
  )
}

export default page