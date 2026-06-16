import Script from 'next/script';

// GA4（Google Analytics 4）
// 環境変数 NEXT_PUBLIC_GA_ID に測定ID（G-XXXXXXXXXX）を設定すると有効になる。
// 未設定なら何も出力しない（＝旧サイトと同じく初期状態はオフ）。
// 設定方法: プロジェクト直下に .env.local を作り `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` を記述、
// または Netlify の環境変数に登録する。
export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`}
      </Script>
    </>
  );
}
