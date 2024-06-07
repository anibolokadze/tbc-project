export const AUTH_COOKIE_KEY = "auth";

export const BASE_URL =
  process.env.VERCEL_ENV === "development"
    ? "http://localhost:3000"
    : // : "https://tbc-project-anibolokadzes-projects.vercel.app";
      "https://tbc-project-three.vercel.app";

export const exploreWorlds = [
  {
    id: "world-1",
    imgUrl: "/planet-01.png",
  },
  {
    id: "world-2",
    imgUrl: "/planet-02.png",
  },
];

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];
