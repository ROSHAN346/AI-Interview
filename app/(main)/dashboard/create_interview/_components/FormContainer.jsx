"use client "
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect , useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InterviewType } from "@/services/Constants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function FormContainer({onHandleInputChanges , GoToNext}) {

  const [interviewType , setInterviewType] = useState([]);

  useEffect(()=>{
    if(interviewType){
      onHandleInputChanges('type' , interviewType)
    }
  },[interviewType])

  const AddInterviewType = (type)=>{
    const data = interviewType.includes(type);
    if(!data){
      setInterviewType(prev =>[...prev , type])
    }
    else{
      const result = interviewType.filter(item => item != type);
      setInterviewType(result);
    }
  }

  return (
    <div className="p-5 bg-white rounded-2xl">
      <div>
        <h2 className="text-sm font-medium"> Job Position</h2>
        <Input placeholder="Full Stack Developer" className="mt-2"
        onChange={(event) => onHandleInputChanges('jobPosition' , event.target.value )}
        ></Input>
      </div>

      <div className="mt-5">
        <h2 className="text-sm font-medium"> Job Description</h2>
        <Textarea
          placeholder="Enter Job Description "
          className="h-[200px] mt-2"
          onChange={(event) => onHandleInputChanges('jobDescription' , event.target.value )}
        ></Textarea>
      </div>

      <div className="mt-5">

        <h2 className="text-sm"> Interview Duration</h2>
        <Select onValueChange = {(value)=>onHandleInputChanges('duration' , value ) }>
          <SelectTrigger className="w-full mt-2">
            <SelectValue placeholder="Select Duration" />
          </SelectTrigger>
          <SelectContent className=''>
            <SelectItem value="5 Min" className='w-full'>5 min</SelectItem>
            <SelectItem value="15 Min">15 min</SelectItem>
            <SelectItem value="30 Min">30 min </SelectItem>
            <SelectItem value="45 Min">45 min</SelectItem>
            <SelectItem value="60 Min">60 min</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-5">
        <h2 className="text-sm font-medium"> Interview Type </h2>
        <div className="flex gap-3 flex-wrap mt-2">
          {InterviewType.map((type , index) =>(
            <div key = {index} className={`flex gap-2 p-1 px-2 cursor-pointer hover:bg-secondary
             bg-white border border-gray-300 rounded-2xl ${interviewType.includes(type.title) && 'bg-blue-100 text-primary'}` }
             onClick={()=> AddInterviewType(type.title)}>
              <type.icon></type.icon>
              <span>{type.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 flex justify-end" onClick={() => GoToNext()}>
      <Button > Generate Questions<ArrowRight/></Button>
      </div>
    </div>
  );
}

export default FormContainer;
