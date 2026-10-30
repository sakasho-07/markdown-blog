# Markdown Blog

Next.jsとTypeScriptを使用して作成した、Markdown形式の記事を表示するブログサイトです。

## 概要

`posts` フォルダに保存したMarkdownファイルを読み込み、記事一覧ページと記事詳細ページを生成します。

記事の追加や更新をMarkdownファイルで管理できるブログサイトです。

## 主な機能

- Markdownファイルから記事を読み込み
- Frontmatterからタイトル・日付・説明・タグを取得
- 記事一覧をカード形式で表示
- 記事ごとの詳細ページを生成
- Markdownの見出しや文章をHTMLとして表示
- コードブロックのシンタックスハイライト
- 静的ページ生成による表示の最適化
- 記事詳細ページから記事一覧へ戻るリンク

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

---

# 学習メモ

## 1. ファイルの役割

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
| `globals.css` | サイト全体の共通スタイルを設定する |
| `layout.tsx` | ページ全体に共通するレイアウトを設定する |

### Markdown とは

Markdownは、見出しや箇条書きなどを簡単な記号で表現できる文章記法です。

例えば、次のように記述します。

```markdown
# 大見出し

## 小見出し

- 項目1
- 項目2
```

Markdownはブログ記事にもREADMEにも使えます。

ただし、ブログ記事は読者に内容を伝えるため、READMEはプロジェクトの内容や使い方を説明するため、という目的の違いがあります。

### 今回学んだこと

- README.mdはプロジェクトの説明書である
- README.mdはNext.jsのプロジェクト作成時に最初から用意されることがある
- `page.tsx`は画面を作るコードであり、README.mdとは役割が異なる
- `posts`フォルダ内のMarkdownファイルは、ブログの記事データとして使われる
- README.mdを書き換えても、通常はブログの画面表示には影響しない

## 2. npm run コマンドの役割

Next.jsでは、`npm run` で始まるコマンドを使って、開発・ビルド・本番環境での起動を行います。

### 1. `npm run dev` — 開発用サーバーの起動

```bash
npm run dev
```

- Webサイトを開発・修正するときに使用する
- ソースコードを変更すると、ブラウザに変更が反映される
- 開発時のエラー確認などに便利
- 開発用の処理が含まれるため、Lighthouseの測定結果が本番環境より低くなる場合がある

### 2. `npm run build` — 本番用ファイルの生成

```bash
npm run build
```

- ソースコードを本番環境で動かせるようにビルドする
- TypeScriptの型チェックやページの生成などが行われる
- エラーがなければ、ビルドが正常に完了する
- このコマンドだけでは、Webサイトをブラウザで確認するためのサーバーは起動しない

### 3. `npm run start` — 本番用サーバーの起動

```bash
npm run start
```

- `npm run build`で生成したファイルを使って、Webサイトを起動する
- 本番環境に近い状態で表示や動作を確認できる
- 実行する前に、`npm run build`を成功させておく必要がある
- Lighthouseでパフォーマンスを測定するときは、こちらで起動したサイトを使う

## 3. デザイン変更で学んだこと

今回、ブログ全体のデザインを黒系から温かみのあるクリーム・オレンジ系に変更しました。

また、記事一覧ページと記事詳細ページのデザインを統一し、記事一覧へ戻るリンクを追加しました。

### 変更したファイル

- `app/globals.css`
- `app/page.tsx`
- `app/posts/[slug]/page.tsx`

### 1. globals.cssによる全体デザインの管理

`globals.css`では、サイト全体に適用する背景色や文字色などを設定できます。

今回、CSS変数を使用して全体の色を変更しました。

```css
:root {
  --background: #faf6ee;
  --foreground: #292720;
}
```

- `--background`：サイト全体の背景色
- `--foreground`：基本となる文字色
- `var(--background)`：定義した背景色を呼び出す

CSS変数を使うことで、サイト全体の色をまとめて管理できます。

### 2. Tailwind CSSによるデザイン変更

`className`にTailwind CSSのクラスを指定することで、HTML要素の見た目を変更できます。

今回使用した主なクラス：

| クラス | 役割 |
|---|---|
| `bg-orange-50` | 背景を薄いオレンジ色にする |
| `bg-orange-100` | 背景を少し濃いオレンジ色にする |
| `text-stone-800` | 文字色を濃いグレー系にする |
| `rounded-2xl` | 角を丸くする |
| `border` | 枠線を付ける |
| `shadow-sm` | 薄い影を付ける |
| `p-6` | 内側に余白を作る |
| `hover:` | マウスを乗せたときの見た目を変更する |

Tailwind CSSを使うことで、CSSファイルを細かく編集しなくても、クラス名を変更するだけでデザインを調整できます。

### 3. 余白と配置の調整

今回、記事一覧へ戻るリンクの位置を調整する中で、余白や配置の指定方法を学びました。

| クラス | 役割 |
|---|---|
| `flex` | 横方向の配置を扱う |
| `justify-start` | 左寄せ |
| `justify-center` | 中央寄せ |
| `justify-end` | 右寄せ |
| `justify-between` | 要素を両端に配置する |
| `mt-8` | 上側に余白を作る |
| `mb-8` | 下側に余白を作る |
| `ml-4` | 左側に余白を作る |
| `mr-4` | 右側に余白を作る |

また、`ml-[20px]`のように数値を直接指定することで、細かい余白の調整もできます。

### 4. relativeとabsoluteによる位置指定

さらに細かい位置調整を行う場合は、`relative`と`absolute`を使用できます。

```tsx
<div className="relative">
  <div className="absolute right-5 top-5">
    ボタン
  </div>
</div>
```

- `relative`：子要素の位置指定の基準となる
- `absolute`：基準となる要素に対して位置を指定する
- `right-5`：右側からの位置を指定する
- `top-5`：上側からの位置を指定する

ただし、画面サイズによって要素が重なる場合もあるため、使用するときは注意が必要です。

## 4. 記事詳細ページとLinkコンポーネント

今回、記事詳細ページに「記事一覧へ戻る」リンクを追加しました。

### Linkとは

Next.jsでページ間を移動するためのコンポーネントです。

```tsx
import Link from "next/link";
```

使用例：

```tsx
<Link href="/">
  ← 記事一覧へ戻る
</Link>
```

- `Link`：ページ間を移動するためのコンポーネント
- `href="/"`：トップページへ移動する
- `className`：リンクの見た目を設定する

通常のHTMLの`a`タグとは異なり、Next.jsのページ遷移に適した仕組みです。

### 今回の配置

記事詳細ページでは、次の2か所にリンクを設置しました。

- 記事タイトルの上：左側に配置
- 記事本文の下：右側に配置

それぞれのリンクを別の`div`で囲むことで、個別に位置を調整できるようにしました。

例えば、下側のリンクは次のように指定しています。

```tsx
<div className="mt-8 flex justify-end">
  <Link href="/">
    ← 記事一覧へ戻る
  </Link>
</div>
```

`flex justify-end`によって、リンクを右側に配置しています。

## 5. 今回の学習で理解したこと

- サイト全体の色は`globals.css`で管理できる
- ページごとの見た目は`className`で調整できる
- Tailwind CSSを使うと、クラス名の指定だけでデザインを変更できる
- `div`などの親要素に配置ルールを指定することで、中にあるボタンの位置を調整できる
- `margin`は要素の外側の余白、`padding`は要素の内側の余白を調整する
- `flex`や`justify-end`を使うことで、要素の配置を変更できる
- `Link`を使うことで、Next.jsのページ間を移動できる
- デザインの変更と、データ取得・表示の処理は分けて考えられる
- 同じリンクでも、親要素の指定を変えることで配置を調整できる

## 6. 今後の学習課題

- Tailwind CSSのクラス名と役割をさらに理解する
- `flex`、`margin`、`padding`の違いを理解する
- スマートフォンでも見やすいレスポンシブデザインを学ぶ
- 共通するデザインや部品をコンポーネント化する方法を学ぶ
- Next.jsのページ遷移やデータ取得の仕組みをさらに理解する