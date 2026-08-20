/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gera um site 100% estatico em ./out — pode ser hospedado em qualquer
  // servico (Vercel, Netlify, GitHub Pages, hospedagem propria).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
