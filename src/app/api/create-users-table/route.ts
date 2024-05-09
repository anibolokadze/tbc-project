import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result =
      await sql`CREATE TABLE newUsers ( id SERIAL, name VARCHAR(255) NOT NULL, age INT NOT NULL, email VARCHAR(255) NOT NULL );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
