export const AUTH_COOKIE_KEY = "auth";

export const BASE_URL =
  process.env.VERCEL_ENV === "development"
    ? "http://localhost:3000"
    : "https://tbc-project-anibolokadzes-projects.vercel.app";

export const exploreWorlds = [
  {
    id: "world-1",
    imgUrl: "/planet-01.png",
  },
  {
    id: "world-2",
    imgUrl: "/planet-08.png",
  },
  {
    id: "world-3",
    imgUrl: "/planet-09.png",
  },
];
