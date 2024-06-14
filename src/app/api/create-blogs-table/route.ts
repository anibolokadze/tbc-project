// import { sql } from "@vercel/postgres";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const result =
//       await sql`CREATE TABLE users ( id SERIAL, name varchar(255), email varchar(255), age varchar(255) );`;
//     return NextResponse.json({ result }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }

import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await sql`CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    time_added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    author_name VARCHAR(255) NOT NULL,
    author_email VARCHAR(255) NOT NULL
);`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
