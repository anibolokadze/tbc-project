import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, age } = await request.json();

  try {
    if (!name || !email || !age)
      throw new Error("Name,email, age are required");

    await sql`INSERT INTO newUsers (name, email,age) VALUES (${name}, ${email}, ${age});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM newUsers;`;

  return NextResponse.json({ users }, { status: 200 });
}