'use client';

// お問い合わせフォーム。Netlify Forms と連携する。
// - name="contact" / data-netlify / hidden form-name / honeypot は Netlify がフォームを認識するために必要。
// - 送信は素のフォーム POST（action="/thanks"）。Netlify が受信を保存し、/thanks に遷移する。
//   ※ローカルの `npm run dev` では Netlify が無いため送信は本番（デプロイ後）でのみ機能する。
// - 個人情報同意チェックのバリデーションは旧 script.js の挙動をそのまま再現。
export default function ContactForm() {
  function handleSubmit(e) {
    const cb = e.currentTarget.querySelector('#privCheck');
    if (cb && !cb.checked) {
      e.preventDefault();
      alert('個人情報の取り扱いへの同意が必要です。');
    }
  }

  return (
    <form
      className="form-wrap rv rv-d1"
      name="contact"
      method="POST"
      action="/thanks"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          このフィールドは入力しないでください: <input name="bot-field" />
        </label>
      </p>
      <div className="fg">
        <label className="fg-label" htmlFor="fType">
          お問い合わせ種別<span className="fg-tag fg-tag--req">必須</span>
        </label>
        <select className="fi fi--sel" id="fType" name="種別" required defaultValue="">
          <option value="" disabled>
            選択してください
          </option>
          <option value="事業に関するお問い合わせ">事業に関するお問い合わせ</option>
          <option value="インターン応募">インターン応募</option>
          <option value="採用に関するお問い合わせ">採用に関するお問い合わせ</option>
          <option value="その他">その他</option>
        </select>
      </div>
      <div className="fg">
        <label className="fg-label" htmlFor="fCompany">
          企業名 / 大学名<span className="fg-tag fg-tag--opt">任意</span>
        </label>
        <input type="text" className="fi" id="fCompany" name="企業名" placeholder="例）株式会社○○ / ○○大学" />
      </div>
      <div className="fg">
        <label className="fg-label" htmlFor="fName">
          氏名<span className="fg-tag fg-tag--req">必須</span>
        </label>
        <input type="text" className="fi" id="fName" name="氏名" placeholder="例）山田 太郎" required />
      </div>
      <div className="fg">
        <label className="fg-label" htmlFor="fKana">
          ふりがな<span className="fg-tag fg-tag--req">必須</span>
        </label>
        <input type="text" className="fi" id="fKana" name="ふりがな" placeholder="例）やまだ たろう" required />
      </div>
      <div className="fg">
        <label className="fg-label" htmlFor="fEmail">
          メールアドレス<span className="fg-tag fg-tag--req">必須</span>
        </label>
        <input type="email" className="fi" id="fEmail" name="メールアドレス" placeholder="例）example@email.com" required />
      </div>
      <div className="fg">
        <label className="fg-label" htmlFor="fTel">
          電話番号<span className="fg-tag fg-tag--opt">任意</span>
        </label>
        <input type="tel" className="fi" id="fTel" name="電話番号" placeholder="例）03-1234-5678" />
      </div>
      <div className="fg">
        <label className="fg-label" htmlFor="fBody">
          お問い合わせ内容<span className="fg-tag fg-tag--req">必須</span>
        </label>
        <textarea className="fi fi--ta" id="fBody" name="お問い合わせ内容" placeholder="お問い合わせ内容をご記入ください。" required></textarea>
      </div>
      <div className="form-privacy">
        <input type="checkbox" id="privCheck" required />
        <label htmlFor="privCheck">
          個人情報の取り扱いに同意の上、送信してください。お預かりした個人情報は、お問い合わせへの対応にのみ使用し、第三者への提供は行いません。
        </label>
      </div>
      <button className="form-btn" type="submit">
        送信する
      </button>
    </form>
  );
}
