import { INTERVIEW_PROMPT } from "@/services/Constants";
import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { jobPosition, jobDescription, duration, type } = await req.json();

  const FINAL_PROMPT = INTERVIEW_PROMPT.replace("{{jobPosition}}", jobPosition)
    .replace("{{jobDescription}}", jobDescription)
    .replace("{{duration}}", duration)
    .replace("{{type}}", type);

  console.log("🔍 Prompt sent to AI:\n", FINAL_PROMPT);

  try {
    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENAPI_ROUTER_KEY,
    });

    // You can change the fallback model here if needed
    const model = "mistralai/mistral-7b-instruct:free"; // fallback while Gemini quota resets

    const completion = await openai.chat.completions.create({
      model,
      messages: [{ role: "user", content: FINAL_PROMPT }],
      response_format: { type: "json" },
    });

    console.log("🧪 Raw Completion:", completion);

    if (!completion.choices || completion.choices.length === 0) {
      console.error("❌ No choices returned by model.");
      return NextResponse.json(
        { error: "AI didn't return any content." },
        { status: 500 }
      );
    }

    const responseMessage = completion.choices[0].message;

    console.log("✅ AI Response:", responseMessage);

    let questions = [];
    try {
      const parsed = JSON.parse(responseMessage.content);
      questions = parsed.questions || [];
    } catch (err) {
      console.error("❌ Failed to parse AI JSON:", err);
      return NextResponse.json(
        { error: "AI returned invalid JSON." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      questions,
    });
  } catch (e) {
    console.error("❌ OpenAI Error:", e);

    // Try to extract clean error message
    const errorMessage =
      e?.error?.message ||
      e?.message ||
      "AI generation failed due to an unknown error.";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
