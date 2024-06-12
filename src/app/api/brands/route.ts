// api/brands.ts
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  try {
    const { rows } = await sql`SELECT DISTINCT brand FROM products;`;
    return NextResponse.json(
      { brands: rows.map((row) => row.brand) },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
