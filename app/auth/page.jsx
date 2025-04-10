"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient'

function Login() {


  // Use to Sign the Google
  const signInWithGoogle = async ()=>{
    const {error} = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })

    if(error){
      console.error('Error' , error.message)
    }
  }


  return (
    <div className='flex flex-col items-center justify-center
    h-screen'>
      <div className='flex flex-col items-center bg-blue-400 p-4 rounded'>
        <Image src={'/logo.png'} alt='logo' 
        width= {100}
        height = {100}
        className='w-[180px]'
        ></Image>
        <div className='flex flex-col itmes-center gap-4'>
          <Image src={'/login.png'} alt='login'
          width={100} 
          height={100}
          className='w-[400px] h-[250px]'></Image>

          <h2 className='text-2xl font-bold text-center'>Welcome to AiCruiter</h2>
          <p className='text-gray-500 text-center mt-1'>Sign in Google Authentication </p>
          <Button
          onClick={signInWithGoogle}>Login with Google</Button>
        </div> 
      </div>
    </div>
  )
}

export default Login
