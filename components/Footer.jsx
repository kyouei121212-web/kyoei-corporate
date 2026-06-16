import Link from 'next/link';

// 全ページ共通のフッター
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <img src="/assets/logo-footer.png" alt="株式会社響栄" className="footer-logo-img" />
          <p className="footer-info">
            株式会社響栄
            <br />〒101-0044 東京都千代田区鍛冶町二丁目9-7 大貫ビル2階2
          </p>
        </div>
        <div className="footer-nav">
          <Link href="/">TOP</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/service">SERVICE</Link>
          <Link href="/company">COMPANY</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 KYOEI Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
