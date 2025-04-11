"use client"
import axios from 'axios';
import { Loader2Icon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

function QuestionList({ formData }) {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (formData) {
      GenerateQuestionList();
    }
  }, [formData]);

  const GenerateQuestionList = async () => {
    setLoading(true);
    try {
      const result = await axios.post('/api/ai-model', {
        ...formData
      });
      console.log(result.data);
      setQuestions(result.data.questions || []); // Handle if API returns null
    } catch (error) {
      console.error(error);
      toast('Server Error, Try Again!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <div className='p-5 bg-blue-50 rounded-2xl border border-gray-100 flex gap-5 items-center'>
          <Loader2Icon className='animate-spin' />
          <div>
            <h2>Generating Interview Questions</h2>
            <p>Our AI is crafting personalised questions</p>
          </div>
        </div>
      ) : (
        questions.length > 0 ? (
          <div className="mt-5 space-y-3">
            {questions.map((q, i) => (
              <div key={i} className="p-4 bg-white rounded-xl border shadow-sm">
                {q}
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-gray-500">No questions found.</p>
        )
      )}
    </div>
  );
}

export default QuestionList;