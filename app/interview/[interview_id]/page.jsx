"use client";
import React, { useContext, useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

import Image from "next/image";
import { Clock, Loader2, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";
import { toast } from "sonner";
import { InterviewDataContext } from "@/context/InterviewDataContext";

function Interview() {
  const { interview_id } = useParams();
  const [interviewData, setInterviewData] = useState(null);
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const { setInterviewInfo } = useContext(InterviewDataContext);
  const router = useRouter();

  useEffect(() => {
    const fetchDetails = async () => {
      if (interview_id) {
        await GetInterviewDetails();
      }
    };
    fetchDetails();
  }, [interview_id]);

  const GetInterviewDetails = async () => {
    setLoading(true);
    try {
      const { data: Interviews, error } = await supabase
        .from("Interviews")
        .select("jobPosition, jobDescription, duration, type")
        .eq("interview_id", interview_id);

      if (error) throw error;

      if (!Interviews || Interviews.length === 0) {
        toast("Incorrect Interview Code");
      } else {
        setInterviewData(Interviews[0]);
      }
    } catch (error) {
      toast("Something went wrong while fetching interview details.");
    } finally {
      setLoading(false);
    }
  };

  const onJoinInterview = async () => {
    if (!userName.trim()) {
      toast("Please enter your full name");
      return;
    }

    setLoading(true);
    try {
      const { data: Interviews, error } = await supabase
        .from("Interviews")
        .select("*")
        .eq("interview_id", interview_id);

      if (error || !Interviews || Interviews.length === 0) {
        toast("Invalid Interview Code");
        return;
      }

      setInterviewInfo({ userName });
      router.push(`/interview/${interview_id}/start`);
    } catch (error) {
      toast("Error joining the interview");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-10 md:px-28 lg:px-48 xl:px-64 mt-18 mb-20">
      <div className="flex flex-col items-center justify-center border rounded-lg bg-white p-7 lg:px-32 xl:px-52">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-[140px]"
        />
        <h2 className="mt-3">AI-Powered Interview Platform</h2>

        <Image
          src="/interview.jpeg"
          alt="interview"
          width={500}
          height={500}
          className="w-[280px] my-6"
        />

        <h2 className="font-bold text-xl">{interviewData?.jobPosition}</h2>
        <h2 className="flex gap-2 items-center text-gray-500 mt-3">
          <Clock />
          {interviewData?.duration}
        </h2>

        <div className="w-full mt-4">
          <h2>Enter your full name</h2>
          <Input
            placeholder="e.g. Michel Moon"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="bg-blue-100 mt-4 p-6 rounded-2xl w-full">
          <h2 className="text-xl mb-2">Before you begin</h2>
          <ul className="list-disc ml-5">
            <li className="text-primary text-sm">
              Test your camera and microphone
            </li>
            <li className="text-primary text-sm">
              Ensure you have a stable internet connection
            </li>
            <li className="text-primary text-sm">
              Find a quiet place for the interview
            </li>
          </ul>
        </div>

        <Button
          className="mt-5 w-full font-bold flex items-center justify-center gap-2"
          disabled={loading || !userName.trim()}
          onClick={onJoinInterview}
        >
          {loading ? <Loader2 className="animate-spin" /> : <Video />}
          Join Interview
        </Button>
      </div>
    </div>
  );
}

export default Interview;
