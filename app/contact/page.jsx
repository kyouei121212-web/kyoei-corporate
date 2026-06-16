import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'お問い合わせ｜株式会社響栄',
  description: '株式会社響栄へのお問い合わせ。事業に関するご相談、インターン応募など、お気軽にご連絡ください。',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'お問い合わせ｜株式会社響栄',
    description: '株式会社響栄へのお問い合わせ。事業に関するご相談、インターン応募など、お気軽にご連絡ください。',
    type: 'website',
    url: 'https://kyouei-jp.com/contact',
    locale: 'ja_JP',
    images: ['/assets/ogp.png'],
  },
  twitter: { card: 'summary_large_image' },
};

export default function ContactPage() {
  return (
    <>
      <div className="sub-hero">
        <p className="sub-hero-en">Contact</p>
        <p className="sub-hero-ja">お問い合わせ</p>
      </div>

      <section className="s" id="contactSec">
        <div className="s-inner">
          <p className="contact-intro rv">
            以下のフォームに必要事項をご入力のうえ、送信してください。
            <br />
            内容を確認のうえ、担当者よりご連絡いたします。
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
