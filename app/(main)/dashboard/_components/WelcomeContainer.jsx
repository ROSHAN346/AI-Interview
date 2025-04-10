"use client"
import { useUser } from '@/app/provider';
import Image from 'next/image';
import React from 'react'

function WelcomeContainer() {
  const { user } = useUser();

  if (!user) {
    return <p className="p-2 text-gray-500">Loading user...</p>
  }

  return (
    <div className='bg-white p-5 mt-3 flex justify-between items-center rounded-xl shadow-md w-[1200px]'>
  <div>
    <h2 className='text-xl font-bold text-blue-700'>Welcome Back, {user?.name}</h2>
    <p className='text-gray-600'>AI-Driven Interviews, Hassle-Free Hiring</p>
  </div>
  <Image 
    src={user?.picture} 
    alt='userAvatar' 
    width={50} 
    height={50}
    className='rounded-full shadow'
  />
</div>

  )
}

export default WelcomeContainer
