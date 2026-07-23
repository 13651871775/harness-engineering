import { createOpenAI } from "@ai-sdk/openai";

// The one place the model is configured.
//   - cheaper for a workshop → a "-mini" / "-nano" variant (e.g. "gpt-5-mini")
//   - this default            → "gpt-5.5"
//
// The server loads env vars from .dev.vars on startup.
// OPENAI_BASE_URL is optional and supports API proxy/compatible endpoints.
const provider = createOpenAI({
	apiKey: process.env.OPENAI_API_KEY,
	baseURL: process.env.OPENAI_BASE_URL || undefined,
});

export const model = provider("glm-5.2");
