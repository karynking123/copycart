import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { input } = await req.json();

    // Simple AI-style response (we upgrade this later)
    const hook = `🔥 STOP SCROLLING! If you're into ${input}, this is about to blow your mind...`;

    return NextResponse.json({ hook });
  } catch (error) {
    return NextResponse.json({ hook: "Error generating hook." });
  }
}