export const metadata = {
  title: '企業概要｜株式会社響栄',
  description: '株式会社響栄の企業概要・アクセス情報。東京都千代田区。',
  alternates: { canonical: '/company' },
  openGraph: {
    title: '企業概要｜株式会社響栄',
    description: '株式会社響栄の企業概要・アクセス情報。東京都千代田区。',
    type: 'website',
    url: 'https://kyouei-jp.com/company',
    locale: 'ja_JP',
    images: ['/assets/ogp.png'],
  },
  twitter: { card: 'summary_large_image' },
};

export default function CompanyPage() {
  return (
    <>
      <div className="sub-hero">
        <p className="sub-hero-en">Company</p>
        <p className="sub-hero-ja">企業概要</p>
      </div>

      <section className="s">
        <div className="s-narrow">
          <div className="sh rv">
            <p className="sh-en">Outline</p>
            <h2 className="sh-title">企業概要</h2>
            <div className="sh-line"></div>
          </div>
          <table className="ov-table rv rv-d1">
            <tbody>
              <tr>
                <th>会社名</th>
                <td>株式会社響栄</td>
              </tr>
              <tr>
                <th>設立</th>
                <td>2024年12月27日</td>
              </tr>
              <tr>
                <th>代表者</th>
                <td>日浦 大耀</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td style={{ whiteSpace: 'nowrap' }}>〒101-0044 東京都千代田区鍛冶町二丁目9-7 大貫ビル2階2</td>
              </tr>
              <tr>
                <th>従業員数</th>
                <td>
                  自社15名<br />常駐パートナーを含め、110名規模の体制で事業を推進
                </td>
              </tr>
              <tr>
                <th>事業内容</th>
                <td>
                  不動産売買・賃貸仲介事業<br />ロボット販売・導入支援事業<br />通信・電力サービス販売
                </td>
              </tr>
              <tr>
                <th>取引銀行</th>
                <td>
                  三井住友銀行<br />みずほ銀行
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="s bg-warm">
        <div className="s-narrow">
          <div className="sh rv">
            <p className="sh-en">Access</p>
            <h2 className="sh-title">アクセス</h2>
            <div className="sh-line"></div>
          </div>
          <p className="rv rv-d1" style={{ fontSize: '14px', color: 'var(--ink-60)', lineHeight: '2' }}>
            〒101-0044 東京都千代田区鍛冶町二丁目9-7 大貫ビル2階2
          </p>
          <div className="map-area rv rv-d2">
            <iframe
              src="https://maps.google.com/maps?q=35.693209,139.772235&z=17&output=embed&hl=ja"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="アクセスマップ"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
