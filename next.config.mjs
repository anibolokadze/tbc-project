/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xjck1m5khuqeilku.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      { protocol: "https", hostname: "s3.zoommer.ge" },
      {
        protocol: "https",
        hostname: "u1gtlfwtzxtqbodc.public.blob.vercel-storage.com",
      },
      { protocol: "https", hostname: "s.gravatar.com" },
      {
        protocol: "https",
        hostname: "mxuupcfkpnw6vpyj.public.blob.vercel-storage.com",
      },
      { protocol: "https", hostname: "prod.spline.design" },
      { protocol: "https", hostname: "cdn.britannica.com" },
    ],
  },
};

export default nextConfig;
