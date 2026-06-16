/** @type {import('next').NextConfig} */
const nextConfig = {
  // 純粋な静的HTMLとして out/ に書き出す（Netlify でそのまま公開できる）
  output: 'export',
  // 静的エクスポートでは Next の画像最適化サーバーが使えないため無効化
  // （このサイトは素の <img> を使うので影響なし）
  images: { unoptimized: true },
  // 末尾スラッシュは付けない（about.html → /about の形を維持。Netlify の pretty_urls と組み合わせる）
  trailingSlash: false,
};

export default nextConfig;
