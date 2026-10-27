import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "test-key",
});

export async function runAnthropicAgent(userPrompt: string) {
  // Deprecations:
  // 1. "claude-sonnet-4-5" is deprecated (needs claude-sonnet-5-5)
  // 2. "temperature" and "top_p" are removed in version 2026-10-21
  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-5",
    max_tokens: 1024,
    temperature: 0.7,
    top_p: 0.9,
    messages: [
      {
        role: "user",
        content: userPrompt,
      },
    ],
  });

  return response.content;
}
