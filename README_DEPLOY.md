# 株式会社響栄 コーポレートサイト

Next.js（App Router / 静的エクスポート）で構築したコーポレートサイトです。
出力は純粋な静的HTMLなので、Netlify でそのまま公開できます。

## 技術構成

- **Next.js 15**（App Router）/ React 19
- **静的エクスポート**（`next.config.mjs` の `output: 'export'`）… `npm run build` で `out/` に静的HTMLを書き出す
- デザインCSSは `app/style.css` / `app/patch.css`（旧サイトからそのまま流用）
- ホスティング：**Netlify**（フォームは Netlify Forms）

## ファイル構成

```
├── app/
│   ├── layout.jsx          全ページ共通（<head>・フォント・Nav・Footer）
│   ├── page.jsx            TOPページ
│   ├── about/page.jsx      響栄について
│   ├── service/page.jsx    事業内容
│   ├── company/page.jsx    企業概要
│   ├── contact/page.jsx    お問い合わせ
│   ├── thanks/page.jsx     送信完了
│   ├── style.css           デザインCSS（フォントは先頭の @import で読込）
│   └── patch.css
├── components/
│   ├── SiteChrome.jsx      ナビ/モバイルメニュー/トップへ戻る/スクロール演出（旧 script.js）
│   ├── Footer.jsx          共通フッター
│   ├── ContactForm.jsx     お問い合わせフォーム（Netlify Forms）
│   └── Analytics.jsx       GA4（環境変数で有効化）
├── public/
│   ├── assets/             ロゴ・favicon・OGP画像
│   ├── __forms.html        Netlify Forms 検出用の隠しフォーム
│   ├── robots.txt / sitemap.xml / site.webmanifest
├── next.config.mjs         静的エクスポート設定
├── netlify.toml            Netlify ビルド設定
└── package.json
```

## ローカル開発

```bash
npm install          # 初回のみ
npm run dev          # 開発サーバー起動（http://localhost:3000 ／ 使用中なら自動で3001等）
```

`npm run build` で本番ビルド（`out/` に静的HTMLを生成）。`npm run preview` で `out/` の中身をローカル確認できます。

## デプロイ（GitHub + Netlify）

`netlify.toml` にビルド設定が入っているので、Netlify 側の設定は基本不要です。

1. このリポジトリを GitHub に push
2. Netlify で「Add new site」→「Import an existing project」→ 該当リポジトリを選択
3. ビルド設定（netlify.toml に記載済み・自動認識される）
   - Build command: `npm run build`
   - Publish directory: `out`
4. 「Deploy site」で公開。GitHub に push するたびに自動で再ビルド・再公開される

## お問い合わせフォーム（Netlify Forms）

- フォーム本体は `/contact`、Netlify がフォームを検出するための隠しフォームが `public/__forms.html`。
- デプロイすると Netlify が自動でフォーム（`contact`）を検出し、送信データを蓄積します。
- 管理画面 →「Forms」で送信内容を確認。メール通知は「Site configuration」→「Forms」→「Form notifications」で設定。
- ※ローカルの `npm run dev` では Netlify が無いため、フォーム送信は**デプロイ後の本番環境でのみ**動作します。

## GA4（Google Analytics 4）の導入

旧サイトのようにHTMLを直接編集する必要はありません。**環境変数 `NEXT_PUBLIC_GA_ID` に測定ID（`G-XXXXXXXXXX`）を設定するだけ**で全ページに計測タグが入ります。

- **ローカル**：プロジェクト直下に `.env.local` を作成し `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` を記述
- **本番（Netlify）**：管理画面 →「Site configuration」→「Environment variables」で `NEXT_PUBLIC_GA_ID` を追加 → 再デプロイ

測定IDの取得手順（GA4管理画面）：
1. https://analytics.google.com でプロパティ作成 → データストリーム（ウェブ／`kyouei-jp.com`）を作成
2. 表示される **測定ID**（`G-` で始まる）を上記の環境変数に設定
3. サイトにアクセスし、GA4「リアルタイム」に自分のアクセスが出れば設置完了

コンバージョン設定（推奨）：
- イベント `page_view` の `page_location` が `/thanks` を含む条件でコンバージョンを作成すると、フォーム送信完了数を計測できます。

## サービス画像について

現在、SERVICE セクションの画像は Pexels CDN から読み込んでいます。本番運用では自社で用意した画像（WebP・横幅1200px以下推奨）を `public/assets/` に置き、各ページの `<img src>` を差し替えてください。

対象：`app/page.jsx`（カード3枚）と `app/service/page.jsx`（詳細3枚）の Pexels URL。

## 独自ドメイン（kyouei-jp.com）の接続

1. Netlify 管理画面 →「Domain management」→「Add custom domain」で `kyouei-jp.com`（必要なら `www.` も）を追加
2. Netlify が表示する DNS 設定（ネームサーバー or CNAME）をドメイン管理画面（お名前.com 等）に設定
3. DNS 反映後（数時間〜最大48時間）、「HTTPS」で Let's Encrypt の証明書が自動発行され `https://kyouei-jp.com` でアクセス可能になる
