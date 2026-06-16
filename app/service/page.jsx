import Link from 'next/link';

export const metadata = {
  title: '事業内容｜株式会社響栄',
  description: '不動産売買・賃貸仲介、搬送ロボット販売・導入支援、通信・電力サービス販売。',
  alternates: { canonical: '/service' },
  openGraph: {
    title: '事業内容｜株式会社響栄',
    description: '不動産売買・賃貸仲介、搬送ロボット販売・導入支援、通信・電力サービス販売。',
    type: 'website',
    url: 'https://kyouei-jp.com/service',
    locale: 'ja_JP',
    images: ['/assets/ogp.png'],
  },
  twitter: { card: 'summary_large_image' },
};

export default function ServicePage() {
  return (
    <>
      <div className="sub-hero">
        <p className="sub-hero-en">Service</p>
        <p className="sub-hero-ja">事業内容</p>
      </div>

      <section className="s">
        <div className="s-inner">
          <div className="svc-detail rv">
            <div className="svc-detail-img">
              <img
                src="https://images.pexels.com/photos/5556585/pexels-photo-5556585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="不動産売買・賃貸仲介事業"
                loading="lazy"
              />
            </div>
            <div>
              <p className="svc-detail-num">Service 01</p>
              <h3 className="svc-detail-name">不動産売買・賃貸仲介事業</h3>
              <p className="svc-detail-desc">
                住まいや事業用物件の売買・賃貸仲介を通じ、お客様の暮らしとビジネスの基盤づくりを支援しています。一人ひとりの状況を丁寧に把握し、物件選びから契約・引き渡しまで、専門知識に基づいた的確なサポートを提供します。住宅購入をはじめとする不動産取引は、人生において大きな意思決定のひとつです。だからこそ、信頼できるパートナーとして、正確な情報と誠実な対応を大切にしています。
              </p>
            </div>
          </div>

          <div className="svc-detail svc-detail--rev rv">
            <div className="svc-detail-img">
              <img
                src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="ロボット販売・導入支援事業"
                loading="lazy"
              />
            </div>
            <div>
              <p className="svc-detail-num">Service 02</p>
              <h3 className="svc-detail-name">ロボット販売・導入支援事業</h3>
              <p className="svc-detail-desc">
                業務効率化や人手不足の解消に向け、工場・倉庫内で荷物を運搬する搬送ロボットの販売から導入後の運用支援までを一貫して手がけています。現場の課題を正確に捉え、最適な搬送ソリューションの選定と定着をサポートします。導入前の課題整理から現場への定着支援、導入後のフォローアップまで、長期的な視点でお客様を支えます。
              </p>
            </div>
          </div>

          <div className="svc-detail rv">
            <div className="svc-detail-img">
              <img
                src="https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="通信・電力サービス販売"
                loading="lazy"
              />
            </div>
            <div>
              <p className="svc-detail-num">Service 03</p>
              <h3 className="svc-detail-name">通信・電力サービス販売</h3>
              <p className="svc-detail-desc">
                通信回線や電力サービスの比較提案・契約手続きの代行を行い、個人のお客様のインフラコスト最適化を支援しています。複雑な料金体系をわかりやすく整理し、各ご家庭に適したプランをご提案します。暮らしの基盤となる通信・電力だからこそ、中立的な立場から最も合理的な選択をご提案することを重視しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="s bg-warm">
        <div className="s-inner cta-box rv">
          <div className="cta-line"></div>
          <p className="cta-heading">
            事業に関するご相談は<br />お気軽にお問い合わせください。
          </p>
          <div className="cta-btns" style={{ marginTop: '32px' }}>
            <Link href="/contact" className="btn btn--primary">
              お問い合わせフォーム
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
