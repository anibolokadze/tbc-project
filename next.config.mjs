/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      {
        protocol: "https",
        hostname: "u1gtlfwtzxtqbodc.public.blob.vercel-storage.com",
      },
      { protocol: "https", hostname: "s.gravatar.com" },
      {
        protocol: "https",
        hostname: "mxuupcfkpnw6vpyj.public.blob.vercel-storage.com",
      },
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "cdn.britannica.com" },
    ],
  },
};

export default nextConfig;
