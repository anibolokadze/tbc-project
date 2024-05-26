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
    ],
  },
};

export default nextConfig;
