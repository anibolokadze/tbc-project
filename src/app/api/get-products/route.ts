// api/get-products.ts
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const category = url.searchParams.get("category");
  const brand = url.searchParams.get("brand");

  try {
    let query = sql`SELECT * FROM products`;

    if (category) {
      query = sql`SELECT * FROM products WHERE category = ${category}`;
    }

    if (brand) {
      query = sql`SELECT * FROM products WHERE brand = ${brand}`;
    }

    const { rows } = await query;
    return NextResponse.json({ products: rows }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
