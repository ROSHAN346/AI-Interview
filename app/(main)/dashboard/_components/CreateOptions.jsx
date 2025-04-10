import { Phone, Video } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function CreateOptions() {
  return (
    <div className='grid grid-cols-2 gap-5 mt-4'>

        {/* video interview  */}
      <Link href={"/dashboard/create_interview"} className='bg-white border border-gray-200 rounded-lg p-5 items-center '>
        <Video className='p-3 text-primary bg-blue-50 rounded-lg w-10 h-10' />
        <h2 className='font-bold '>Create New  Interview</h2>
        <p className='text-gray-500'>Create AI Interviews and Schedule them with Candidatese</p>
      </Link>


      {/* Phone Screening  */}
      <div className='bg-white border border-gray-200 rounded-lg p-5 items-center'>
      <Phone className='p-3 text-primary bg-blue-50 rounded-lg w-10 h-10' />
        <h2 className='font-bold '>Create Phone Screenign Call</h2>
        <p className='text-gray-500'>Create Phone Screening Call with Candidatese</p>
      </div>
    </div>
  )
}

export default CreateOptions
