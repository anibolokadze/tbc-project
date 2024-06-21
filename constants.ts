export const AUTH_COOKIE_KEY = "auth";

export const BASE_URL =
  process.env.VERCEL_ENV === "development"
    ? //  process.env.VERCEL_ENV === "production"
      "http://localhost:3000"
    : // : "https://tbc-project-anibolokadzes-projects.vercel.app";
      "https://tbc-project-three.vercel.app";

export const exploreWorlds = [
  {
    id: "world-1",
    imgUrl: "/4.jpg",
  },
  {
    id: "world-2",
    imgUrl: "/pexels-xespri-806609.jpg",
  },
];
