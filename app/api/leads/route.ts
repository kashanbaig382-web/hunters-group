
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, whatsapp, service, requirements } =
      await request.json();

    if (!name?.trim() || !email?.trim() || !service?.trim() || !requirements?.trim()) {
      return NextResponse.json(
        { success: false, error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    const token = process.env.GOOGLE_SHEETS_TOKEN;

    if (!webhookUrl || !token) {
      throw new Error("Google Sheets environment variables are missing.");
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        token,
        name: name.trim(),
        email: email.trim(),
        whatsapp: whatsapp?.trim() || "",
        service: service.trim(),
        requirements: requirements.trim(),
      }),
      cache: "no-store",
    });

    const responseText = await response.text();

    let result;

    try {
      result = JSON.parse(responseText);
    } catch {
      console.error("Google Apps Script response:", responseText);

      throw new Error(
        "Google Apps Script returned an invalid response. Check deployment access and URL."
      );
    }

    if (!response.ok || !result.success) {
      throw new Error(result.error || "Google Sheets rejected the lead.");
    }

    return NextResponse.json({
      success: true,
      message: "Lead saved successfully.",
    });
  } catch (error) {
    console.error("Lead saving error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Lead could not be saved.",
      },
      { status: 500 }
    );
  }
}
