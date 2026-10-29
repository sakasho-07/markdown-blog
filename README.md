# Markdown Blog

Next.jsとTypeScriptを使用して作成した、Markdown形式の記事を表示するブログサイトです。

## 概要

`posts` フォルダに保存したMarkdownファイルを読み込み、記事一覧ページと記事詳細ページを生成します。

## 主な機能

- Markdownファイルから記事を読み込み
- Frontmatterからタイトル・日付・説明・タグを取得
- 記事一覧をカード形式で表示
- 記事ごとの詳細ページを生成
- Markdownの見出しや文章をHTMLとして表示
- コードブロックのシンタックスハイライト
- 静的ページ生成による表示の最適化

## 使用技術

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- gray-matter
- remark
- remark-rehype
- rehype-highlight
- rehype-stringify

## ディレクトリ構成

```text
markdown-blog/
├── app/
│   ├── posts/
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   └── posts.ts
├── posts/
│   ├── markdown-guide.md
│   ├── nextjs-basics.md
│   ├── react-components.md
│   ├── static-generation.md
│   └── typescript-intro.md
├── package.json
└── README.md
```

## 動作確認方法

### 1. パッケージのインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` にアクセスすると、ブログを確認できます。

### 3. 本番用ビルドの確認

```bash
npm run build
```

本番用サーバーで確認する場合は、ビルド成功後に次のコマンドを実行します。

```bash
npm run start
```

## 記事の追加方法

`posts` フォルダに `.md` ファイルを追加します。

各ファイルの先頭に、Frontmatterとして記事情報を記述します。

```yaml
---
title: "記事タイトル"
date: "2026-10-28"
description: "記事の説明"
tags:
  - Next.js
  - 初心者向け
---
```

その下にMarkdown形式で本文を記述すると、記事ページに反映されます。

## パフォーマンス

本番用ビルドを使用したLighthouseの測定で、Performance **99点**を確認しました。

※測定結果は実行環境や測定条件によって変わります。


## 学習メモ：ファイルの役割

### README.md とは

README.mdは、プロジェクトの内容や使い方を説明するためのファイルです。

プロジェクトを初めて見る人が、どのようなアプリなのか、どの技術を使っているのか、どうやって起動するのかを理解できるようにします。

Next.jsでは、プロジェクト作成時にREADME.mdがひな形として用意されることがあります。

### ファイルの役割の違い

| ファイル | 役割 |
|---|---|
| `README.md` | プロジェクトの説明書 |
| `page.tsx` | Webページの画面を作る |
| `*.ts` | TypeScriptで処理やデータの扱いを記述する |
| `*.md` | Markdown形式で文章を書く |
| `posts/*.md` | ブログの記事データを保存する |

### Markdown とは

Markdownは、見出しや箇条書きなどを簡単な記号で表現できる文章記法です。

例えば、次のように記述します。

```markdown
# 大見出し

## 小見出し

- 項目1
- 項目2
```

Markdownはブログ記事にもREADMEにも使えます。ただし、ブログ記事は読者に内容を伝えるため、READMEはプロジェクトの内容や使い方を説明するため、という目的の違いがあります。

### 今回学んだこと

- README.mdはプロジェクトの説明書である
- README.mdはNext.jsのプロジェクト作成時に最初から用意されることがある
- `page.tsx`は画面を作るコードであり、README.mdとは役割が異なる
- `posts`フォルダ内のMarkdownファイルは、ブログの記事データとして使われる
- README.mdを書き換えても、通常はブログの画面表示には影響しない

## npm run コマンドの役割

Next.jsでは、`npm run` で始まるコマンドを使って、開発・ビルド・本番環境での起動を行う。

### 1. `npm run dev` — 開発用サーバーの起動

```bash
npm run dev
```

- Webサイトを開発・修正するときに使用する。
- ソースコードを変更すると、ブラウザに変更が反映される。
- 開発時のエラー確認などに便利。
- 開発用の処理が含まれるため、Lighthouseの測定結果が本番環境より低くなる場合がある。

### 2. `npm run build` — 本番用ファイルの生成

```bash
npm run build
```

- ソースコードを本番環境で動かせるようにビルドする。
- TypeScriptの型チェックや、ページの生成などが行われる。
- エラーがなければ、ビルドが正常に完了する。
- このコマンドだけでは、Webサイトをブラウザで確認するためのサーバーは起動しない。

### 3. `npm run start` — 本番用サーバーの起動

```bash
npm run start
```

- `npm run build` で生成したファイルを使って、Webサイトを起動する。
- 本番環境に近い状態で表示や動作を確認できる。
- 実行する前に、`npm run build` を成功させておく必要がある。
- Lighthouseでパフォーマンスを測定するときは、こちらで起動したサイトを使う。


