import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request: NextRequest) {
  const email = request.cookies.get("email")?.value;

  try {
    const auth_user = await sql`SELECT * FROM auth_user WHERE email = ${email}`;

    return NextResponse.json({ auth_user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
