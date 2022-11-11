<h1 align="center">
  <img width="240" src=".github/assets/fui_logo_logotype_light.svg#gh-light-mode-only" alt="For UI" title="For UI">
  <img width="240" src=".github/assets/fui_logo_logotype_dark.svg#gh-dark-mode-only">
</h1>

<div align="center">

[![npm version](https://badge.fury.io/js/@4design%2Ffor-ui.svg)](https://badge.fury.io/js/@4design%2Ffor-ui)
[![CI](https://github.com/4-design/for-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/4-design/for-ui/actions/workflows/ci.yml)

</div>

For UI は <a href="https://3-shake.com">株式会社スリーシェイク</a>のデザインシステム「For Design System」のデザイントークンとコンポーネントライブラリを実装したパッケージです。

React と Tailwind CSS で作られています。

## インストール

```
yarn add @4design/for-ui
```

Peer dependencies のインストール

```
yarn add tailwindcss @mui/lab @mui/material @types/react react react-icons
```

## セットアップ

### 1. Tailwind CSS を導入

#### Tailwind CSS の CSS を読み込む

- `global.css` (名前は任意) を作成
  - `@tailwind base;` など必要な項目を記述する
- `app.tsx` で `global.css` を読み込む

#### `postcss.config.js` の作成

- `postcss.config.js` が存在しない場合は作成する。

  - デフォルトの構成を自分で定義する必要があることに注意 ([参考](https://nextjs.org/docs/advanced-features/customizing-postcss-config#customizing-plugins))

- 以下を追加

```js
plugins: {
  tailwindcss: {},
  autoprefixer: {},
  // ...
}
```

### 2. For UI の設定を読み込む

#### preset の読み込み

```js
preset: [require('@4design/for-ui/tailwind.config.base.js')],
```

#### MUI のスタイル上書きのための import 設定

```js
important: #root, // 任意の上位セレクタを指定する
```

または

```js
important: true;
```

を指定

#### `tailwind.config.js` 設定例

```js
module.exports = {
  important: '#__next',
  presets: [require('@4design/for-ui/tailwind.config.base.js')],
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

詳細は `/example` 以下に実装例があるので参考にしてください。

## License

MIT License

## Author

4 design (3-shake Inc.)
