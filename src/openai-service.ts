import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "test-key",
});

export async function generateCompletion(prompt: string) {
  // Deprecations:
  // 1. "gpt-4o-2024-08-06" shuts down Jan 2027 (replaces with gpt-6-luna)
  const gpt4Response = await openai.chat.completions.create({
    model: "gpt-4o-2024-08-06",
    messages: [{ role: "user", content: prompt }],
  });

  // 2. "gpt-3.5-turbo" is legacy shutdown (replaces with gpt-5.6-terra)
  const legacyResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Summarize: " + prompt }],
  });

  return {
    primary: gpt4Response.choices[0]?.message.content,
    summary: legacyResponse.choices[0]?.message.content,
  };
}
