import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
  _request: Request,
  { params }: { params: { blogId: string } }
) {
  const { blogId } = params;

  try {
    const { rows } = await sql`SELECT * FROM blogs WHERE id = ${blogId};`;
    if (rows.length === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json({ blog: rows[0] }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
