import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await sql`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        category TEXT,
        price DECIMAL(10, 2) NOT NULL,
        discountPercentage DECIMAL(5, 2),
        rating DECIMAL(3, 2),
        brand TEXT,
        reviews TEXT,
        thumbnail_link TEXT,
        image_links TEXT
      );
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
