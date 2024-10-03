'use client'
import React,{useEffect,useState} from 'react'
import Dashboard from '../../../components/Dashboard'
import { isAdmin,getToken,isAuthenticated } from "../../../hooks/useAuth";
import { useRouter } from 'next/navigation';


const page = () => {
  const [isLoading,setIsLoading] = useState(true)
  const router = useRouter()
  
  useEffect(()=>{
   isAdmin()?setIsLoading(false):router.push('/login')

  })

  return (
    <>
    {
    isLoading?"loading":<Dashboard/>
    }
    </>
  )
}

export default page