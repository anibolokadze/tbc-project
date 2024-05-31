export const AUTH_COOKIE_KEY = "auth";

export const BASE_URL =
  process.env.VERCEL_ENV === "development"
    ? "http://localhost:3000"
    : "https://tbc-project-two.vercel.app";
