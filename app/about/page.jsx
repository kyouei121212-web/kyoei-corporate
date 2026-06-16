export const metadata = {
  title: '響栄について｜株式会社響栄',
  description: '株式会社響栄の代表挨拶と企業理念をご紹介します。',
  alternates: { canonical: '/about' },
  openGraph: {
    title: '響栄について｜株式会社響栄',
    description: '株式会社響栄の代表挨拶と企業理念をご紹介します。',
    type: 'website',
    url: 'https://kyouei-jp.com/about',
    locale: 'ja_JP',
    images: ['/assets/ogp.png'],
  },
  twitter: { card: 'summary_large_image' },
};

export default function AboutPage() {
  return (
    <>
      <div className="sub-hero">
        <p className="sub-hero-en">About Us</p>
        <p className="sub-hero-ja">響栄について</p>
      </div>

      {/* Greeting — ① 写真枠を削除し単一カラムに。署名は本文下のゴールド縦ライン入りカードに変更 */}
      <section className="s">
        <div className="s-inner">
          <div className="sh rv">
            <p className="sh-en">Greeting</p>
            <h2 className="greeting-title">代表挨拶</h2>
          </div>
          <p className="greeting-body rv rv-d1">
            若者が自らの意志で未来を選び取れる社会をつくりたい。その想いが、株式会社響栄の原点です。
            <br />
            <br />
            社会に出る前の不安、将来への迷い、自分の可能性への疑い——多くの若者が抱えるそうした想いに、私たちは真正面から向き合いたいと考えています。
            <br />
            <br />
            事業を通じて人を育て、育った人がまた次の誰かの力になる。そのような循環を生み出すことが、私たちの目指す姿です。一人ひとりの成長に寄り添い、確かな力を育む環境を整え続けることで、社会に貢献してまいります。
            <br />
            <br />
            まだ歩み始めたばかりの会社ではありますが、誠実に、着実に、関わるすべての方から信頼される企業を目指して、日々邁進いたします。
          </p>
          <div
            className="greeting-sig rv rv-d2"
            style={{
              marginTop: '40px',
              padding: '32px',
              background: '#faf8f5',
              borderLeft: '3px solid #a68a3e',
            }}
          >
            <p style={{ fontSize: '12px', color: '#999', letterSpacing: '0.1em', marginBottom: '8px' }}>
              株式会社響栄 代表取締役
            </p>
            <p
              style={{
                fontFamily: "'Noto Serif JP',serif",
                fontSize: '24px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: '#111',
              }}
            >
              日浦 大耀
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: '14px',
                color: '#999',
                letterSpacing: '0.06em',
                marginTop: '4px',
              }}
            >
              Taiyo Hiura
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy — 本番サイトと同一（bg-dark / phil-grid）。クライアント指示により変更しない */}
      <section className="s bg-dark">
        <div className="s-inner" style={{ maxWidth: '880px' }}>
          <div className="sh sh--center rv" style={{ marginBottom: 'clamp(48px,5vw,64px)' }}>
            <p className="sh-en" style={{ color: 'var(--accent)' }}>
              Philosophy
            </p>
            <h2 className="sh-title" style={{ color: 'rgba(245,243,237,0.9)' }}>
              企業理念
            </h2>
            <div className="sh-line" style={{ margin: '20px auto 0' }}></div>
          </div>
          <div className="phil-grid">
            <div className="phil-item rv">
              <p className="phil-label">Mission</p>
              <p className="phil-text">
                未来を選ぶ力を、<br />すべての若者へ。
              </p>
            </div>
            <div className="phil-item rv rv-d1">
              <p className="phil-label">Vision</p>
              <p className="phil-text">
                挑戦で溢れる社会に向けて、<br />1人ひとりの夢を<br />形にできる企業に成る。
              </p>
            </div>
            <div className="phil-item rv rv-d2">
              <p className="phil-label">Value</p>
              <p className="phil-text">常に才徳兼備であれ。</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
