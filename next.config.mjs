/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
      NEXT_PUBLIC_API_TOKEN: process.env.NEXT_PUBLIC_API_TOKEN,
      GOOGLE_TAG_URL: process.env.GOOGLE_TAG_URL,
      GOOGLE_TAG_CONFIG: process.env.GOOGLE_TAG_CONFIG,
    } 
};

export default nextConfig;
