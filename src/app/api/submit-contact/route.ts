import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  try {
    await sql`INSERT INTO contact_messages (name, email, message, submitted_at) VALUES (${name}, ${email}, ${message}, NOW());`;
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
