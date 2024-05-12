import { cookies } from "next/headers";

export async function POST(request: any) {
  const { username, password } = await request.json();

  const headers: HeadersInit = {
    "Access-Control-Allow-Origin": "https://your-vercel-app.vercel.app",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Credentials": "true",
    "Content-Type": "application/json",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { headers });
  }

  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    cookies().set("user", JSON.stringify(data.token));
  }

  return Response.json({ username, password });
}
