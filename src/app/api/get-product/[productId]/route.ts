import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
  req: Request,
  { params }: { params: { productId: string } }
) {
  const { productId } = params;

  try {
    const { rows } = await sql`SELECT * FROM products WHERE id = ${productId};`;
    if (rows.length === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json({ product: rows[0] }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
