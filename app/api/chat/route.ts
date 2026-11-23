
import OpenAI from "openai";
import { NextResponse } from "next/server";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

type Lead = {
  name: string;
  email: string;
  whatsapp?: string;
  service: string;
  requirements: string;
};

const saveLeadTool = {
  type: "function" as const,
  function: {
    name: "save_lead",
    description:
      "Save a lead only after the customer has explicitly confirmed the complete summary. Never invent or assume any field.",
    parameters: {
      type: "object",
      properties: {
        name: { type: "string" },
        email: { type: "string" },
        whatsapp: { type: "string" },
        service: { type: "string" },
        requirements: { type: "string" },
        customer_confirmed: {
          type: "boolean",
          description:
            "Must be true only after the customer explicitly confirms the complete summary.",
        },
      },
      required: [
        "name",
        "email",
        "whatsapp",
        "service",
        "requirements",
        "customer_confirmed",
      ],
      additionalProperties: false,
    },
  },
};

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function saveLead(data: Lead) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const token = process.env.GOOGLE_SHEETS_TOKEN;

  if (!webhookUrl || !token) {
    throw new Error("Google Sheets configuration is missing.");
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({ ...data, token }),
    cache: "no-store",
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.error || "Lead could not be saved.");
  }
}

export async function POST(request: Request) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "Groq API key is missing." },
        { status: 500 }
      );
    }

    const { messages, confirmedLead } = await request.json();

    if (!Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages." },
        { status: 400 }
      );
    }

    // Save only when the frontend explicitly sends a confirmed lead.
    if (confirmedLead !== undefined) {
      const lastUserMessage = [...messages]
        .reverse()
        .find((m: { role?: string }) => m.role === "user");

      const confirmationText =
        typeof lastUserMessage?.content === "string"
          ? lastUserMessage.content.trim().toLowerCase()
          : "";

      const allowedConfirmations = [
        "yes",
        "yes, correct",
        "yes, these details are correct.",
        "confirm",
        "confirmed",
        "that's correct",
        "that is correct",
        "bilkul sahi",
        "haan sahi hai",
        "ji bilkul",
      ];

      if (!allowedConfirmations.includes(confirmationText)) {
        return NextResponse.json(
          {
            error:
              "Customer confirmation is required before saving.",
          },
          { status: 400 }
        );
      }

      const lead = confirmedLead as Lead;

      if (
        typeof lead.name !== "string" ||
        !lead.name.trim() ||
        typeof lead.email !== "string" ||
        !validEmail(lead.email.trim()) ||
        typeof lead.service !== "string" ||
        !lead.service.trim() ||
        typeof lead.requirements !== "string" ||
        !lead.requirements.trim() ||
        (lead.whatsapp !== undefined &&
          typeof lead.whatsapp !== "string")
      ) {
        return NextResponse.json(
          {
            error:
              "Complete and valid customer details are required.",
          },
          { status: 400 }
        );
      }

      await saveLead({
        name: lead.name.trim(),
        email: lead.email.trim(),
        whatsapp: lead.whatsapp?.trim() || "",
        service: lead.service.trim(),
        requirements: lead.requirements.trim(),
      });

      return NextResponse.json({
        reply:
          "Thank you! Your inquiry has been successfully saved. Our team can review your requirements. For further assistance, contact us on WhatsApp: +92 323 8874539.",
        saved: true,
      });
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
You are Hunters AI Assistant, the official assistant of Hunters Group.

SERVICES:
- E-Commerce Solutions
- Import Services
- Export Services
- Logistics & Shipping
- Buyer & Sourcing Support
- Web Development

Be professional, friendly, concise and reply in the visitor's language.
Never invent prices, policies, customer information or requirements.

LEAD COLLECTION:
When a visitor requests a quotation:
1. Ask for full name.
2. Ask for email.
3. Ask which service they need.
4. Ask for their business requirements.
5. WhatsApp number is optional.
6. Ask one or two questions at a time.
7. Never assume missing information or create example customer details.
8. If a field is missing, ask for it.

CONFIRMATION:
When all required information is collected, show a clear summary.
Ask the customer to confirm that all details are correct.
Do not claim the lead is saved.
Do not call save_lead. Saving is handled separately by the website after confirmation.

WhatsApp: +92 323 8874539
`,
        },
        ...safeMessages,
      ],
      temperature: 0.4,
      max_tokens: 700,
    });

    return NextResponse.json({
      reply:
        completion.choices[0]?.message?.content ||
        "Sorry, I could not generate a response.",
      saved: false,
    });
  } catch (error) {
    console.error("Hunters AI error:", error);

    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again or contact us on WhatsApp.",
      },
      { status: 500 }
    );
  }
}
