import { cookies } from "next/headers";

export async function POST(request: any) {
  const { username, password } = await request.json();

  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    cookies().set("user", JSON.stringify(data.token));
  }

  return Response.json({ username, password });
}
