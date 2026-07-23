import { createOpenAI } from "@ai-sdk/openai";

// The one place the model is configured.
//   - cheaper for a workshop → a "-mini" / "-nano" variant (e.g. "gpt-5-mini")
//   - this default            → "gpt-5.5"
//
// The provider reads OPENAI_API_KEY / OPENAI_BASE_URL from the environment at
// request time (server/env.ts loads them from .dev.vars before any imports).
const provider = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
});

export const model = provider.chat("glm-5.2");
