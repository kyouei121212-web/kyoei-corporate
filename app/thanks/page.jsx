import Link from 'next/link';

export const metadata = {
  title: '送信完了｜株式会社響栄',
  description: 'お問い合わせありがとうございます。',
  robots: { index: false, follow: false },
  alternates: { canonical: '/thanks' },
  openGraph: {
    title: '送信完了｜株式会社響栄',
    description: 'お問い合わせありがとうございます。',
    type: 'website',
    url: 'https://kyouei-jp.com/thanks',
    locale: 'ja_JP',
    images: ['/assets/ogp.png'],
  },
  twitter: { card: 'summary_large_image' },
};

export default function ThanksPage() {
  return (
    <>
      <div className="sub-hero">
        <p className="sub-hero-en">Thank You</p>
        <p className="sub-hero-ja">送信完了</p>
      </div>
      <section className="s">
        <div className="s-inner" style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '22px',
              fontWeight: 600,
              letterSpacing: '0.06em',
              marginBottom: '28px',
            }}
          >
            お問い合わせいただきありがとうございます。
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--ink-50)', lineHeight: '2' }}>
            内容を確認のうえ、担当者よりご連絡いたします。
            <br />
            通常2〜3営業日以内にご返信いたしますので、
            <br />
            今しばらくお待ちくださいますようお願い申し上げます。
          </p>
          <Link href="/" className="btn" style={{ marginTop: '40px', display: 'inline-block' }}>
            トップページへ戻る
          </Link>
        </div>
      </section>
    </>
  );
}
