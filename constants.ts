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
    imgUrl: "/pexels-designecologist-1999463.jpg",
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

export const projects = [
  {
    title: "Smart Phones",
    description: "drag to interact",
    src: "https://prod.spline.design/uQ1GFXGpp-tOienV/scene.splinecode",
    link: "/smartphones",
    color: "#000000",
  },
  {
    title: "Computers",
    description: "drag to interact",
    src: "https://prod.spline.design/O2uQ1To9JZGM0ov5/scene.splinecode",
    link: "/computers",
    color: "#908486",
  },
  {
    title: "Brands",
    description: "drag to interact",
    src: "https://prod.spline.design/6RK7IBuj8XNMflNA/scene.splinecode",
    link: "/brands",
    color: "#000000",
  },
];
