export const AUTH_COOKIE_KEY = "auth";
// export const BASE_URL =
//   process.env.NEXT_PUBLIC_VERCEL_URL === "production"
//     ? "http://localhost:3000"
//     : "https://tbc-project-anibolokadzes-projects.vercel.app";

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://tbc-project-anibolokadzes-projects.vercel.app";
