"use client"
import { Progress } from '@/components/ui/progress'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import FormContainer from './_components/FormContainer'
import QuestionList from './_components/QuestionList'
import { toast } from "sonner"


function CreateInterview() {
    const router = useRouter()
    const [step , setstep ] = useState(1);

    const [formData , setFormData] = useState();
    const onHandleInputChanges = (field , value) =>{
      setFormData(prev =>({
        ...prev , 
        [field]: value
      }))

      console.log("FormData"  , formData);
    }

    const onGoToNext=()=>{
      if(!formData?.jobPosition || !formData?.jobDescription || !formData?.duration ||  !formData?.type){
        toast("Please Enter All Details")
        return ;
      }
      setstep(step + 1);
    }

  return (
    <div className='mt-10 px-10 md:px-24 lg:px-44 xl:px-56' >
      <div className='flex  gap-5 items-center'>
        <ArrowLeft onClick={()=>{
            router.back()
        }}></ArrowLeft>
        <h2 className='font-bold text-2xl'>Create New Interview </h2>
      </div>
        <Progress value = {step*33} className='my-5'></Progress>

        {step == 1? <FormContainer onHandleInputChanges ={onHandleInputChanges}
                                   GoToNext={() => onGoToNext()}
        ></FormContainer>
        : step == 2? <QuestionList formData={formData}></QuestionList>: null}
    </div>
  )
}

export default CreateInterview
