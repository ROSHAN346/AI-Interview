"use client";
import { InterviewDataContext } from "@/context/InterviewDataContext";
import React, { useContext, useEffect } from "react";
import { Mic, Phone, Timer } from "lucide-react";
import Image from "next/image";
import Vapi from "@vapi-ai/web";
import AlertConfirmation from "./_components/AlertConfirmation";

function StartInterview() {
  const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext);

  const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);

  useEffect(() => {
    interviewInfo && startCall();
  }, [interviewInfo]);

  const startCall = () => {
    if (!interviewInfo?.interviewData?.questions) {
      console.log("No questions found");
      return;
    }

    const questionList = interviewInfo.interviewData.questions
      .map((q) => q.question)
      .join(", ");

    console.log("Question List:", questionList);

    // Example: Start your Vapi call here with `questionList`
    // vapi.start({ firstMessage: questionList });

    const assistantOptions = {
        name: "AI Recruiter",
        firstMessage: `Hello ${interviewInfo?.userName}, how are you? Ready for your interview on ${interviewInfo?.interviewData?.jobPosition}?`,
        transcriber: {
          provider: "deepgram",
          model: "nova-2",
          language: "en-US",
        },
        voice: {
          provider: "playht",
          voiceId: "jennifer",
        },
        model: {
          provider: "openai",
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: `You are an AI voice assistant conducting interviews.
      Your job is to ask questions, listen to the candidate's answers, assess their responses,
      and provide a supportive environment while maintaining a relaxed yet professional tone.
      
      Example:
      "Hey there! Welcome to your ${interviewInfo?.interviewData?.jobPosition} interview. Let's get started with a few questions."
      
      Always ask one question at a time and wait for the candidate's response before proceeding. Keep the questions clear and concise. 
      
      Here are the questions to ask:
      ${questionList}
      
      If the candidate seems stuck, offer hints or rephrase the question without giving away the answer. Example:
      "Take your time thinking about it" or "Perhaps consider approaching it from a different angle."
      
      Provide brief, encouraging feedback after each answer. Example:
      "Great point about teamwork!" or "Interesting perspective on problem-solving."
      
      Keep the conversation natural and engaging—use casual phrases like "right", "awesome", "let's tackle a tricky one!"
      
      After each question, move up the ladder gradually in terms of complexity. Example:
      "That was good prep! Now let's go a bit deeper into how you'd be handling your skills!"
      
      End on a positive note:
      "Thanks for your time! Hope to see you crushing projects soon!"
      
      Key guidelines:
      • Be friendly, engaging, and warm
      • Speak naturally, like a real conversation
      • Adapt based on the candidate's confidence level
      • Ensure the interview remains focused on ${interviewInfo?.interviewData?.jobPosition}
      • End with encouragement and enthusiasm
      `,
            },
          ],
        },
      };
      

    vapi.start(assistantOptions);
  };

  return (
    <div className="p-20 lg:px-48 xl:px-56">
      <h2 className="font-bold text-xl flex justify-between">
        AI Interview Session
        <span className="flex gap-2 items-center">
          <Timer />
          00:00:00
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5">
        <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center ">
          <Image
            src={"/ai.jpeg"}
            alt="ai"
            width={100}
            height={100}
            className="w-[200px] h-[200px] rounded-full object-cover"
          />
          <h2>AI Recruiter</h2>
        </div>
        <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center ">
          <h2 className="text-2xl bg-primary text-white p-3 rounded-full px-5">
            {interviewInfo?.userName[0]}
          </h2>
          <h2>{interviewInfo?.userName}</h2>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 mt-5">
        <Mic className=" h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />
        <AlertConfirmation stopInterview={()=> vapi.stop()}>
          <Phone className=" h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
        </AlertConfirmation>
      </div>
      <h2 className="text-sm text-gray-400 text-center mt-5">
        Interview in Progress...
      </h2>
    </div>
  );
}

export default StartInterview;
