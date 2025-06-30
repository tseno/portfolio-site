# Tadayuki Seno's Portfolio

AI-Driven Backend Engineer のポートフォリオサイトです。

## 技術スタック

- **Framework**: Next.js 15.3
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## 機能

- レスポンシブデザイン
- プロフィール・キャリア情報
- 技術スキル一覧
- 主要プロジェクト実績
- AI活用開発の実績紹介

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

[http://localhost:3000](http://localhost:3000) でサイトを確認できます。

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Vercelへのデプロイ

### 1. Vercelアカウントの準備
- [Vercel](https://vercel.com) でアカウントを作成
- GitHubアカウントと連携

### 2. GitHubリポジトリの作成
```bash
# GitHubでリポジトリを作成後
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin [YOUR_GITHUB_REPO_URL]
git push -u origin main
```

### 3. Vercelでのデプロイ
1. [Vercel Dashboard](https://vercel.com/dashboard) にログイン
2. "New Project" をクリック
3. GitHubリポジトリを選択
4. プロジェクト設定を確認（デフォルトでOK）
5. "Deploy" をクリック

### 4. 自動デプロイの設定
- GitHubの main ブランチへの push で自動デプロイ
- プレビュー環境も自動で作成

## 連絡先の更新

デプロイ前に以下のファイルでメールアドレスを実際のものに変更してください：
- `src/app/page.tsx` の `mailto:contact@example.com` 部分
