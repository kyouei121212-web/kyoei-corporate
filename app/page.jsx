import Link from 'next/link';

export const metadata = {
  title: '株式会社響栄｜未来を選ぶ力を、すべての若者へ。',
  description:
    '株式会社響栄は、不動産・ロボット・通信の3事業を展開し、若者の成長と挑戦を支える企業です。東京都千代田区。',
  alternates: { canonical: '/' },
  openGraph: {
    title: '株式会社響栄｜未来を選ぶ力を、すべての若者へ。',
    description:
      '株式会社響栄は、不動産・ロボット・通信の3事業を展開し、若者の成長と挑戦を支える企業です。東京都千代田区。',
    type: 'website',
    url: 'https://kyouei-jp.com/',
    locale: 'ja_JP',
    images: ['/assets/ogp.png'],
  },
  twitter: { card: 'summary_large_image' },
};

// 本番サイトと同一の構造化データ（Corporation のみ）
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Corporation',
  name: '株式会社響栄',
  alternateName: 'KYOEI Inc.',
  url: 'https://kyouei-jp.com',
  logo: 'https://kyouei-jp.com/assets/logo-hero.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '鍛冶町二丁目9-7 大貫ビル2階2',
    addressLocality: '千代田区',
    addressRegion: '東京都',
    postalCode: '101-0044',
    addressCountry: 'JP',
  },
  foundingDate: '2024-12-27',
  founder: { '@type': 'Person', name: '日浦大耀' },
  description: '不動産・ロボット・通信の3事業を展開し、若者の成長と挑戦を支える企業。',
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      <section className="hero" id="heroSection">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-logo-wrap">
            <img src="/assets/logo-hero.png" alt="響栄" className="hero-logo-img" />
            <span className="hero-logo-sub">KYOEI Inc.</span>
          </div>
          <h1 className="hero-catch">
            未来を選ぶ力を、<br />すべての若者へ。
          </h1>
          <div className="hero-line"></div>
          <p className="hero-sub">KYOEI Inc.</p>
        </div>
      </section>

      <section className="s">
        <div className="s-inner">
          <div className="about-grid">
            <div>
              <div className="sh rv">
                <p className="sh-en">About Us</p>
                <h2 className="sh-title">
                  確かな信念で、<br />社会の基盤を築く。
                </h2>
                <div className="sh-line"></div>
              </div>
              <p className="about-text rv rv-d1" style={{ fontSize: '14px', color: 'var(--ink-60)', lineHeight: '2.2' }}>
                不動産・ロボット・通信の3つの事業を通じ、社会インフラの構築と人材育成に取り組んでいます。
              </p>
              <Link href="/about" className="more rv rv-d2">
                See more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="s bg-warm">
        <div className="s-inner">
          <div className="sh sh--center rv">
            <p className="sh-en">Service</p>
            <h2 className="sh-title">事業内容</h2>
            <div className="sh-line"></div>
          </div>
          <div className="svc-grid">
            {/* ③ クロール可能にするため <div onclick> から <a href> に変更 */}
            <Link className="svc-card rv rv-d1" href="/service">
              <div className="svc-card-img">
                <img
                  src="https://images.pexels.com/photos/5556585/pexels-photo-5556585.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                  alt="不動産売買・賃貸仲介事業"
                  loading="lazy"
                />
              </div>
              <p className="svc-num">Service 01</p>
              <h3 className="svc-name">不動産売買・賃貸仲介事業</h3>
              <p className="svc-desc">
                住まいや事業用物件の売買・賃貸仲介を通じ、暮らしとビジネスの基盤づくりを支援しています。
              </p>
              <span className="svc-link">View detail</span>
            </Link>
            <Link className="svc-card rv rv-d2" href="/service">
              <div className="svc-card-img">
                <img
                  src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                  alt="ロボット販売・導入支援事業"
                  loading="lazy"
                />
              </div>
              <p className="svc-num">Service 02</p>
              <h3 className="svc-name">ロボット販売・導入支援事業</h3>
              <p className="svc-desc">
                業務効率化や人手不足の解消に向け、工場・倉庫内の搬送ロボットの販売から運用支援までを一貫して手がけています。
              </p>
              <span className="svc-link">View detail</span>
            </Link>
            <Link className="svc-card rv rv-d3" href="/service">
              <div className="svc-card-img">
                <img
                  src="https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                  alt="通信・電力サービス販売"
                  loading="lazy"
                />
              </div>
              <p className="svc-num">Service 03</p>
              <h3 className="svc-name">通信・電力サービス販売</h3>
              <p className="svc-desc">
                通信回線や電力サービスの提案を通じ、個人のお客様のインフラコスト最適化を支援しています。
              </p>
              <span className="svc-link">View detail</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="s bg-warm">
        <div className="s-inner cta-box rv">
          <div className="cta-line"></div>
          <p className="cta-heading">お気軽にお問い合わせください。</p>
          <p className="cta-sub">
            事業に関するご相談・採用のお問い合わせなど、<br />お気軽にご連絡ください。
          </p>
          <div className="cta-btns">
            <Link href="/contact" className="btn btn--primary">
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
