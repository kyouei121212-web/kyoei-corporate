# 株式会社響栄 コーポレートサイト デプロイガイド

## ファイル構成

```
├── index.html          TOPページ
├── about.html          響栄について（代表挨拶・企業理念）
├── service.html        事業内容
├── company.html        企業概要・アクセス
├── contact.html        お問い合わせ（Netlify Forms対応）
├── thanks.html         送信完了ページ
├── style.css           スタイルシート
├── script.js           JavaScript
├── netlify.toml        Netlify設定
├── README_DEPLOY.md    このファイル
└── assets/
    ├── logo-nav.png    ナビゲーション用ロゴ
    ├── logo-hero.png   ヒーロー用ロゴ
    ├── logo-footer.png フッター用ロゴ
    ├── favicon.ico     TODO: ファビコンを配置
    └── apple-touch-icon.png  TODO: Apple Touch Iconを配置
```

## デプロイ手順（GitHub + Netlify）

### Step 1: GitHubリポジトリの作成
1. github.com にログイン
2. 「New repository」をクリック
3. リポジトリ名: `kyoei-corporate`（任意）
4. Public または Private を選択
5. 「Create repository」をクリック

### Step 2: ファイルをGitHubにアップロード
```bash
cd kyoei-site
git init
git add .
git commit -m "初回コミット: コーポレートサイト"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/kyoei-corporate.git
git push -u origin main
```

### Step 3: Netlifyでデプロイ
1. app.netlify.com にログイン（GitHubアカウントで可）
2. 「Add new site」→「Import an existing project」
3. GitHubを選択し、先ほどのリポジトリを選択
4. Build settings:
   - Build command: （空欄のまま）
   - Publish directory: `.`（ドット）
5. 「Deploy site」をクリック
6. 数秒でデプロイ完了。仮URLが発行される

### Step 4: 独自ドメインの接続
1. Netlify管理画面 →「Domain management」→「Add custom domain」
2. 取得済みのドメイン（例: kyouei-jp.com）を入力
3. Netlifyが表示するDNS設定（ネームサーバーまたはCNAME）をドメイン管理画面に設定
4. 反映まで最大48時間（通常は数時間）

### Step 5: SSL（HTTPS）の確認
1. ドメインが反映されたら、Netlify管理画面 →「HTTPS」を確認
2. 「Provision SSL certificate」が表示されたらクリック
3. Let's Encryptによる無料SSL証明書が自動発行される
4. `https://kyouei-jp.com` でアクセスできることを確認

## フォーム（Netlify Forms）の確認

- サイトをデプロイすると、Netlifyが自動でフォームを検出します
- Netlify管理画面 →「Forms」にフォーム送信データが蓄積されます
- メール通知設定: 「Site configuration」→「Forms」→「Form notifications」
  - 「Email notification」を追加し、通知先メールアドレスを設定

## 公開後チェックリスト

- [ ] 全ページがhttpsで正常表示される
- [ ] ナビゲーションが全ページで正常に動作する
- [ ] お問い合わせフォームを送信し、Netlify管理画面にデータが届く
- [ ] フォーム送信後にthanks.htmlに遷移する
- [ ] メール通知が管理者に届く
- [ ] スマートフォンで全ページの表示を確認する
- [ ] Google Search Consoleにサイトを登録する
- [ ] Google Analytics測定タグを設置する（head内にスクリプト追加）
- [ ] OGP画像を作成し `/assets/` に配置、各HTMLのmeta og:imageを更新する
- [ ] faviconを作成し `/assets/favicon.ico` に配置する

## サービス画像について

現在、サービスセクションの画像はPexels CDNから読み込んでいます。
本番運用では以下の手順で自社サーバーに移行してください。

1. 各画像URLをブラウザで開き、ダウンロード
2. squoosh.app でWebP形式に変換（横幅1200px以下推奨）
3. `/assets/` ディレクトリに配置
4. HTML内の画像パスを更新

対象画像:
- 不動産: pexels-photo-5556585.jpeg
- ロボット: pexels-photo-4481259.jpeg
- 通信・電力: pexels-photo-1624895.jpeg


## GA4（Google Analytics 4）の導入手順

### Step 1: GA4アカウントの作成
1. https://analytics.google.com にGoogleアカウントでログイン
2. 「測定を開始」をクリック
3. アカウント名を入力（例：「株式会社響栄」）
4. プロパティ名を入力（例：「響栄コーポレートサイト」）
5. タイムゾーン：日本、通貨：日本円を選択
6. ビジネス情報を入力して「作成」

### Step 2: データストリームの設定
1. プラットフォーム：「ウェブ」を選択
2. URLに `kyouei-jp.com` を入力
3. ストリーム名を入力（例：「響栄HP」）
4. 「ストリームを作成」をクリック
5. 表示される **測定ID**（`G-` で始まる文字列）をメモ

### Step 3: 測定タグの設置
全HTMLファイル（index.html, about.html, service.html, company.html, contact.html, thanks.html）の `<head>` 内にある以下のコメントブロックを探してください：

```html
<!-- TODO: GA4測定IDを取得後、以下の2行のコメントを外してIDを設定してください
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>window.dataLayer=...gtag('config','G-XXXXXXXXXX');</script>
-->
```

このブロックの `<!-- TODO:` と `-->` を削除し、`G-XXXXXXXXXX` をStep 2で取得した測定IDに置き換えてください。

### Step 4: 動作確認
1. サイトにアクセスした状態でGA4管理画面 →「リアルタイム」を確認
2. 自分のアクセスがカウントされていれば設置完了

### コンバージョン設定（推奨）
1. GA4管理画面 →「イベント」→「イベントを作成」
2. イベント名：`contact_form_submit`
3. 条件：`page_location` が `https://kyouei-jp.com/thanks.html` を含む
4. このイベントを「コンバージョンとしてマーク」に設定
5. これにより、フォーム送信完了数が自動計測される

## 独自ドメイン（kyouei-jp.com）の接続手順

### Netlifyでの設定
1. Netlify管理画面 →「Domain management」→「Add custom domain」
2. `kyouei-jp.com` を入力
3. `www.kyouei-jp.com` も追加する場合は同様に入力

### DNS設定（ドメイン管理画面側）
Netlifyが表示する設定内容に従い、ドメイン管理画面（お名前.com等）で以下のいずれかを設定：

**方法A：Netlify DNSを使う場合（推奨）**
1. Netlify管理画面で「Use Netlify DNS」を選択
2. 表示される4つのネームサーバーをドメイン管理画面に設定
3. 例：`dns1.p01.nsone.net` など

**方法B：CNAMEレコードを使う場合**
1. ドメイン管理画面でCNAMEレコードを追加
2. ホスト名：`@` または空欄
3. 値：Netlifyが表示するサブドメイン（例：`kyoei-corporate.netlify.app`）

### SSL確認
1. DNS反映後（数時間〜最大48時間）、Netlify管理画面 →「HTTPS」を確認
2. 証明書が自動発行されれば `https://kyouei-jp.com` でアクセス可能
