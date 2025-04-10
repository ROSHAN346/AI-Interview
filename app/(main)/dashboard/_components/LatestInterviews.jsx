import { Button } from '@/components/ui/button';
import { Camera, Video } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'

function LatestInterviews() {
    const [intersview , setinterview ] = useState([]);

  return (
    <div className='my-5'>
     <h2 className='font-bold text-2xl'>Prevriously Created Interviews </h2>

     {intersview?.length == 0 &&
     <div className='p-5 flex flex-col gap-3 items-center bg-white rounded-2xl '>
        <Video className='h-10 w-10 text-primary'></Video>
        <h2> You don't have any interview created ! </h2>
        <Button> <Link href={'/dashboard/create_interview'}>+ Create New Interview</Link> </Button>
        </div>}  
    </div>
  )
}

export default LatestInterviews
