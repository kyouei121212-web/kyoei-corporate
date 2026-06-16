import './style.css';
import './patch.css';
import SiteChrome from '@/components/SiteChrome';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';

// 全ページ共通の <head> 情報。各ページの metadata で title / description / OGP / canonical を上書きする。
export const metadata = {
  metadataBase: new URL('https://kyouei-jp.com'),
  icons: {
    icon: [
      { url: '/assets/favicon.ico', type: 'image/x-icon' },
      { url: '/assets/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/assets/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        {/* nav・モバイルメニュー・トップへ戻るボタン（旧 script.js の挙動を内包） */}
        <SiteChrome />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
