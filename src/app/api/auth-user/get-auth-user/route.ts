import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request: NextRequest) {
  const user_id = request.cookies.get("user_id")?.value;

  try {
    const auth_user =
      await sql`SELECT * FROM auth_user WHERE user_id = ${user_id}`;

    return NextResponse.json({ auth_user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
