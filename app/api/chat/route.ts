
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
        { status: 500 }
      );
    }

    const { messages } = await request.json();

    if (!Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages." },
        { status: 400 }
      );
    }

    const safeMessages = messages
      .filter(
        (m: { role?: string; content?: string }) =>
          ["user", "assistant"].includes(m.role || "") &&
          typeof m.content === "string"
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
You are Hunters AI Assistant, the official website assistant of Hunters Group.

Company services:
1. E-Commerce Solutions
2. Import Services
3. Export Services
4. Logistics & Shipping
5. Buyer & Sourcing Support
6. Web Development

Your responsibilities:
- Explain Hunters Group services accurately.
- Help visitors identify suitable services.
- Ask relevant questions about their business requirements.
- Be professional, friendly and concise.
- Never invent prices, guarantees, delivery times or company policies.
- If unsure, say the team will confirm the details.
- For quotations, direct visitors to WhatsApp: +92 323 8874539.
- Reply in the language used by the visitor.
- Never claim to be a human employee.
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
      { status: 500 }
    );
  }
}
