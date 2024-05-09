import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.pathname.replace("/api/delete-user/", "");

  try {
    if (!id) throw new Error("ID is required");

    await sql`DELETE FROM newUsers WHERE id = ${Number(id)};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM newUsers;`;

  return NextResponse.json({ users }, { status: 200 });
}
