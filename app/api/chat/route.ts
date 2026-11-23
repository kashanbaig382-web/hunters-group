import OpenAI from "openai";
import { NextResponse } from "next/server";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(request: Request) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "Groq API key is missing." },
        { status: 500 },
      );
    }

    const { messages } = await request.json();

    if (!Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages." }, { status: 400 });
    }

    const safeMessages = messages
      .filter(
        (m: { role?: string; content?: string }) =>
          ["user", "assistant"].includes(m.role || "") &&
          typeof m.content === "string",
      )
      .slice(-12)
      .map((m: { role: "user" | "assistant"; content: string }) => ({
        role: m.role,
        content: m.content.slice(0, 2000),
      }));

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "system",

          content: `
You are Hunters AI Assistant, the official AI assistant of Hunters Group.

COMPANY SERVICES:
1. E-Commerce Solutions
2. Import Services
3. Export Services
4. Logistics & Shipping
5. Buyer & Sourcing Support
6. Web Development

YOUR MAIN RESPONSIBILITIES:
- Explain company services accurately.
- Understand visitors' business requirements.
- Recommend relevant services.
- Be friendly, professional and concise.
- Reply in the same language as the visitor.
- Never invent prices, guarantees, delivery times or policies.

LEAD COLLECTION:
When a visitor shows interest in a service or asks for a quotation:

1. Politely ask for their full name.
2. Ask for their email address.
3. Ask what service they need.
4. Ask them to briefly explain their business requirement.
5. Collect these details naturally, one or two questions at a time.
6. Do not repeatedly ask for information already provided.
7. Never pressure visitors to share personal information.
8. If they do not want to share their email, continue helping them.

AFTER COLLECTING DETAILS:
- Summarize the visitor's requirements.
- Ask them to confirm the summary.
- Direct them to WhatsApp for the quotation:
  +92 323 8874539
- Do not claim that a lead has been saved or submitted.

IMPORTANT:
You are an AI assistant, not a human employee.
Never claim that you have contacted the team or saved an inquiry.
`,
        },
        ...safeMessages,
      ],
      temperature: 0.6,
      max_tokens: 700,
    });

    const reply =
      completion.choices[0]?.message?.content ||
      "Sorry, I could not generate a response.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Groq AI error:", error);

    return NextResponse.json(
      { error: "AI connection failed. Please try again." },
      { status: 500 },
    );
  }
}
