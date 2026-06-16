'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// 旧 script.js の挙動（ハンバーガー / スクロールでのnav切替 / totop / フェードイン）を
// React のクライアントコンポーネントとして再現したもの。全ページ共通で layout から読み込む。

const NAV_LINKS = [
  { href: '/about', label: 'ABOUT' },
  { href: '/service', label: 'SERVICE' },
  { href: '/company', label: 'COMPANY' },
];

export default function SiteChrome() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [menuOpen, setMenuOpen] = useState(false);
  // hero があるページ（TOP）は初期状態が hero-visible、それ以外は scrolled
  const [scrolled, setScrolled] = useState(!isHome);
  const [showTop, setShowTop] = useState(false);

  // スクロールに応じた nav のスタイル切替 と totop の表示制御
  useEffect(() => {
    const heroEl = document.getElementById('heroSection');
    function onScroll() {
      const sy = window.scrollY || window.pageYOffset;
      setShowTop(sy > 400);
      if (heroEl) {
        const heroH = heroEl.offsetHeight;
        setScrolled(sy > heroH * 0.85);
      } else {
        setScrolled(true);
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  // ページ遷移時にメニューを閉じる
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // メニュー開閉に合わせて body のスクロールをロック
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // スクロールで要素をフェードイン（.rv → .vis）。ページ遷移ごとに再スキャン。
  useEffect(() => {
    const els = document.querySelectorAll('.rv:not(.vis)');
    if (!els.length) return undefined;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('vis');
            obs.unobserve(en.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [pathname]);

  const navClass = `nav ${scrolled ? 'nav--scrolled' : 'nav--hero-visible'}`;

  return (
    <>
      <nav className={navClass} id="nav">
        <Link href="/" className="nav-logo">
          <img src="/assets/logo-nav.png" alt="株式会社響栄" className="nav-logo-img" />
        </Link>
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link className={`nav-link${pathname === l.href ? ' active' : ''}`} href={l.href}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link className="nav-cta" href="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
        <button
          className={`ham${menuOpen ? ' open' : ''}`}
          id="ham"
          aria-label="メニュー"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mob-menu${menuOpen ? ' open' : ''}`} id="mob">
        <Link href="/">TOP</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/service">SERVICE</Link>
        <Link href="/company">COMPANY</Link>
        <Link href="/contact">CONTACT</Link>
      </div>

      <button
        className={`totop${showTop ? ' show' : ''}`}
        id="totop"
        aria-label="トップへ戻る"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {'↑'}
      </button>
    </>
  );
}
