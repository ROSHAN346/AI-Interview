"use client";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function QuestionList({ formData }) {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

  const [questionList, setquestionList] = useState();

  useEffect(() => {
    if (formData) {
      GenerateQuestionList();
    }
  }, [formData]);

  const GenerateQuestionList = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/ai-model", {
        ...formData,
      });
      console.log(result.data);
      setQuestions(result.data.questions || []); // Handle if API returns null
    } catch (error) {
      console.error(error);
      toast("Server Error, Try Again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="p-5 bg-blue-50 rounded-2xl border border-primary flex gap-5 items-center">
          <Loader2Icon className="animate-spin" />
          <div className="">
            <h2 className="">Generating Interview Questions</h2>
            <p>Our AI is crafting personalised questions</p>
          </div>
        </div>
      ) : questions.length > 0 ? (
        <div className="mt-5 space-y-5">
          {Object.entries(
            questions.reduce((acc, curr) => {
              const type = curr.type || 'Other';
              if (!acc[type]) acc[type] = [];
              acc[type].push(curr);
              return acc;
            }, {})
          ).map(([type, qs], i) => (
            <div key={i}>
              <h2 className="text-xl font-bold mb-2">{type}</h2>
              <div className="space-y-3">
                {qs.map((q, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border shadow-sm">
                    {q.question}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-gray-500">No questions found.</p>
      
      )}
    </div>
  );
}

export default QuestionList;
