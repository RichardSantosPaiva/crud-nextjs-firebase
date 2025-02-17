/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false, // Pode evitar problemas com URLs na Vercel
  output: "standalone", // Garante que o build funcione corretamente na Vercel
};

export default nextConfig;
