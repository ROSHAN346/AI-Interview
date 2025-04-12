import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Clock, Copy, Mail, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

function InterviewLink({ interview_id, formData }) {
  const url = process.env.NEXT_PUBLIC_HOST_URL + "/" + interview_id;
  const GetInterviewUrl = () => {
    return url;
  };

  const onCopyLink = async () => {
    await navigator.clipboard.writeText(url);
    toast("Link Copied")
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <img
        src={"/check1.jpeg"}
        alt="check"
        width={50}
        height={50}
        className="rounded-[50%]"
      />
      <h2 className="font-bold text-2xl mt-4">Your AI interview is Ready </h2>
      <p className="mt-3">
        Share this link with your candidates to start the interview{" "}
      </p>

      {/* Section first  */}
      <div className="w-full  bg-white rounded-2xl p-7 ">
        <div className="flex justify-between itmes-center   bg-white rounded-2xl mt-4">
          <h2 className="text-2xl font-bold">Interview Link </h2>
          <h2 className="p-1 px-2 text-primary">Valid for 30 Days </h2>
        </div>

        <div className=" flex gap-3 flex-row p-3">
          <Input defaultValue={GetInterviewUrl()} disable={true}></Input>
          <Button
            onClick={() => {
              onCopyLink();
            }}
          >
            <Copy></Copy>Copy Link
          </Button>
        </div>
        <hr className="my-7" />

        <div className=" flex gap-5 ">
          <h2 className="text-sm text-gray-500 flex gap-2 items-center">
            <Clock></Clock> 30 min {formData?.duration}{" "}
          </h2>
          <h2 className="text-sm text-gray-500 flex gap-2 items-center">
            <Clock></Clock> 30 min {formData?.duration}{" "}
          </h2>
          <h2 className="text-sm text-gray-500 flex gap-2 items-center">
            <Clock></Clock> 30 min {formData?.duration}{" "}
          </h2>
        </div>
      </div>

      <div className="mt-7 bg-white p-5 rounded-lg w-full ">
        <h2 className="text-2xl font-bold">Share Via </h2>
        <div className="flex gap-7">
          <Button variant={"outline"}>
            <Mail></Mail>Email{" "}
          </Button>
          <Button variant={"outline"}>
            <Mail></Mail>Slack{" "}
          </Button>
          <Button variant={"outline"}>
            <Mail></Mail>Whatsapp{" "}
          </Button>
        </div>
      </div>

      <div className="flex w-full justify-between mt-6  gap-5">
        <Link href={"/dashboard"}>
          <Button>
            {" "}
            <ArrowLeft></ArrowLeft> Back To Dashboard
          </Button>
        </Link>

        <Link href={"/dashboard/create_interview"}>
          <Button onClick={''}>
            {" "}
            <Plus></Plus> Create New Interveiw
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default InterviewLink;
