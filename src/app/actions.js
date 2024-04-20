"use server";

import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../constants";

export async function login(username, password) {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const user = await response.json();

  if (response.ok) {
    const cookieStore = cookies();
    cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user), {
      httpOnly: true,
      secure: true,
      maxAge: user.expiresIn * 60,
    });
    return true;
  } else {
    return false;
  }
}

export async function deleteAuthCookie() {
  cookies().delete("auth");
}
