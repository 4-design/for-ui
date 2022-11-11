<p align="center">
  <img width="240" src=".github/assets/fui_logo_logotype_light.svg#gh-light-mode-only" alt="For UI Logo">
  <img width="240" src=".github/assets/fui_logo_logotype_dark.svg#gh-dark-mode-only">
</p>

For UIは <a href="https://3-shake.com">株式会社スリーシェイク</a>のデザインシステムFor Design Systemのデザイントークンとコンポーネントライブラリを実装したパッケージです。

Reactとtailwindcssを使用しています。

## インストール

```
yarn add @4design/for-ui
```

Peer dependenciesのインストール

```
yarn add tailwindcss @mui/lab @mui/material @types/react react react-icons
```

## セットアップ

### 1. Tailwind CSSを導入

#### Tailwind CSSのCSSファイルを読み込む
 
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

### 2. For UIの設定を読み込む

#### presetの読み込み

```js
preset: [require('@4design/for-ui/tailwind.config.base.js')],
```

#### MUIのスタイル上書きのためのimport設定

```js
important: #root, // 任意の上位セレクタを指定する
```

または

```js
important: true
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
