import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { updateAuthUser } from "../../../../../api";

export const revalidate = 0;

export async function POST(request: Request) {
  const { name, email, picture, user_id } = await request.json();

  try {
    if (!name || !email || !picture || !user_id)
      throw new Error("name and email are required");

    const authUser =
      await sql`SELECT * FROM auth_user where user_id = ${user_id}`;
    if (!authUser.rows.length) {
      await sql`INSERT INTO auth_user (name, email, picture, user_id) VALUES (${name}, ${email}, ${picture}, ${user_id});`;
    } else {
      updateAuthUser(picture, user_id)
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const auth_user = await sql`SELECT * FROM auth_user;`;
  return NextResponse.json({ auth_user }, { status: 200 });
}
