import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { title, description, author_name, author_email } =
    await request.json();

  try {
    if (!title || !description || !author_name || !author_email)
      throw new Error(
        "Title, description, author_name, and author_email are required"
      );

    await sql`INSERT INTO blogs (title, description, author_name, author_email) VALUES (${title}, ${description}, ${author_name}, ${author_email});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const blogs = await sql`SELECT * FROM blogs;`;

  return NextResponse.json({ blogs }, { status: 200 });
}
