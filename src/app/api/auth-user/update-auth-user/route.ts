import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function PUT(request: NextRequest) {
  const { picture, user_id } = await request.json();

  try {
    if (!user_id) {
      throw new Error("Product not found");
    }

    const authUser =
      await sql`SELECT * FROM auth_user WHERE user_id = ${user_id};`;

    if (authUser.rows.length) {
      await sql`UPDATE auth_user SET picture = ${picture},added_on = NOW() WHERE user_id = ${user_id};`;
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const auth_user = await sql`SELECT * FROM auth_user;`;
  return NextResponse.json({ auth_user }, { status: 200 });
}
