
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, whatsapp, service, requirements } =
      await request.json();

    if (!name || !email || !service || !requirements) {
      return NextResponse.json(
        { success: false, error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    const token = process.env.GOOGLE_SHEETS_TOKEN;

    if (!webhookUrl || !token) {
      return NextResponse.json(
        { success: false, error: "Google Sheets configuration is missing." },
        { status: 500 }
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        token,
        name,
        email,
        whatsapp: whatsapp || "",
        service,
        requirements,
      }),
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.error || "Could not save lead.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead saving error:", error);

    return NextResponse.json(
      { success: false, error: "Lead could not be saved. Please try again." },
      { status: 500 }
    );
  }
}
