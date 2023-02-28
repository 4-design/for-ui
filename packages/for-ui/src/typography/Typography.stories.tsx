import React, { Fragment } from 'react';
import { Description, DocsStory, Source, Subtitle, Title } from '@storybook/addon-docs/blocks';
import { Meta } from '@storybook/react/types-6-0';
import { LegacyText as Text, texts, Variant, variants } from './Typography';

export default {
  title: 'Example / Typography',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const body: Partial<Variant>[] = [variants.p, variants.body1, variants.body2, variants.span, variants.caption];

const short = `Freelance エンジニアに「いい案件」を。`;

const long = `RelanceはSREのプロフェッショナルがエンジニア目線で案件を分析してミスマッチを防ぎ、あなたにあったベストな案件を提供します。直感的かつsimpleなinterfaceにより、Database、Storage、SaaSなど、あらゆるデータを活用するETL/Data Pipelineを素早く構築することができます。また、豊富な変換・加工処理により、Platform間のデータ連携をスムーズに実現します。 `;

export const Sizes = (): JSX.Element => {
  return (
    <Fragment>
      {Object.entries(texts).map(([k, v]) => (
        <Fragment key={k}>
          <Text variant="caption">text-{k}</Text>
          <p className={v} key={k}>
            {short}
          </p>
        </Fragment>
      ))}
    </Fragment>
  );
};

Sizes.parameters = {
  title: 'Sizes',
  docs: {
    source: {
      language: 'tsx',
      code: `
{ /* Common Usage */ }
<p className="text-r">Hello</p>

{ /* Bold Text */ }
<p className="text-r font-bold">Hello</p>
`,
    },
    page: () => (
      <Fragment>
        <Title />
        <Subtitle>Sizes - タイポグラフィのサイズに関するドキュメント</Subtitle>
        <Description
          markdown={`
for-uiでは5サイズのTypographyを使い分けています。
それぞれ \`text-xs\` \`text-s\` \`text-r\` \`text-xr\` \`text-l\` \`text-xl\` となっており，\`tailwind.config.cjs\` で設定されているため，\`className\`や\`tw\` propsを使って使うことができます。
一般的なテキストは\`text-r\`を使うことが想定されています。
Cardのタイトルのように\`text-r\`を含むエリアのタイトルにはそれより少し大きな\`text-l\` (またはカード間のヒエラルキーを表現する場合は \`text-xr\`) を，さらにページ全体のタイトルのようなものには \`text-xl\`を使うことを想定しています。
またそれより小さな，アノテーションのようなテキストには \`text-xs\` を使うことを想定しています。

\`text-s\`と\`text-r\`，及び\`text-s\`と\`text-xs\`について，それぞれお互いの大きさが十分に異なるようには設計されていません。これが何を意味するかと言うと，例えば見出しに\`text-r\`をつかって本文に\`text-s\`を使うだけでは，従属関係の表現が十分ではありません。
これを回避するには，文字の太さを変える・色をつける等他のやり方でヒエラルキーを表現するか，またはそもそも大きさが十分に異なる組み合わせを使用してください。

## デザインの背景

なぜ6種類のみなのかというと，多すぎるサイズの設定はデザインの一貫性を崩してしまい，ページごとに同じレベルの重要度で表示されるべきものがデザイナーや実装者で異なってしまう可能性があるためです。
これをできるだけ防ぐため，この5種類のみを設定する制約を定めています。

## 設定値

### フォント

数字の小さいほど優先度が高いです。

1. \`yakuhanjp\` 約物といわれる「や、を詰めるフォントです。
2. \`Noto Sans JP\` 和文用のフォントです。
3. \`Open Sans\` 欧文用のフォントです。

### ウェイト

- \`400\` 普通
- \`700\` 太字

### テキストのスタイルとCSSでの表現の対応表

| Style | Font Size | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- |
| \`text-xs\` | 12 px (.75 rem) | 16 px (1 rem) | .03 rem |
| \`text-s\` | 14 px (.875 rem) | 20 px (1.25 rem) | .03 rem |
| \`text-r\` | 16 px (1 rem) | 24 px (1.5 rem) | .03 rem |
| \`text-xr\` | 20 px (1.25 rem) | 28 px (1.75 rem) | .03 rem |
| \`text-l\` | 24 px (1.5 rem) | 32 px (2 rem) | .03 rem |
| \`text-xl\` | 32 px (2 rem) | 40 px (2.5 rem) | .03 rem |
        `}
        />
        <Source />
        <DocsStory id="example-typography--sizes" />
      </Fragment>
    ),
  },
};

const colors = {
  'text-shade-dark-default': `text-shade-dark-default`,
  'text-shade-medium-default': `text-shade-medium-default`,
  'text-shade-light-default': `text-shade-light-default`,
  'text-shade-dark-disabled': `text-shade-dark-disabled`,
  'text-primary-dark-default': `text-primary-dark-default`,
  'text-negative-medium-default': `text-negative-medium-default`,
};

export const Colors = (): JSX.Element => {
  return (
    <Fragment>
      {Object.entries(colors).map(([k, v]) => (
        <div className="mb-4 flex flex-col" key={k}>
          <Text variant="caption">Color: {k}</Text>
          <Text variant="p" className={v}>
            {short}
          </Text>
        </div>
      ))}
    </Fragment>
  );
};

Colors.parameters = {
  title: 'Colors',
  docs: {
    source: {
      language: 'tsx',
      code: `
import { Text } from '@4design/for-ui'

...

${Object.keys(colors)
  .map(
    (v) => `<Text variant="p" className="${v}">Freelance エンジニアに「いい案件」を。</Text>
`,
  )
  .join('')}
`,
    },
    description: { story: `# hello` },
    page: () => (
      <Fragment>
        <Title />
        <Subtitle>Colors - 文字の色についてのドキュメント</Subtitle>
        <Description
          markdown={`
Typographyと色は厳密には切り離された概念ですが，ここでは便宜上テキストの色としてこのセクションにドキュメントを含めます。

Typographyのサイズと同じく，どの部分を目立たせるかはよく考えて使用する必要があります。大きく異なるのはサイズは \`text-r\` という中ほどの大きさが普通の状態であるのに対して，カラーはデフォルトが \`text-shade-dark-default\` です。
これが何を意味するかと言うと，通常の色が濃く，それより情報量を落としたい部分で薄い色を使うという，少し高度な技術が求められるということです。

もしエラー表現などでない場面でただのテキストを \`text-shade-dark-default\` より目立たせたければ，唯一の方法は \`text-primary-dark-default\` を使うことです。
そのため，あるページを開いたときに \`text-primary-dark-default\` で表示されているテキストは，本当に重要な部分であることを示すことができます。言い換えれば，そうしなければならず，最大でも4箇所ほどが望ましいでしょう。
また \`text-primary-dark-default\` はユーザーが操作可能な，何らかの反応がある部分としての表示色の役割を持っています。この原則を保つため，なるべく強調したいテキストは \`font-bold\` を用いた表現に留めるのがよいです。

意味を持たない色として，一般的なテキストには \`text-shade-dark-default\` と \`text-shade-medium-default\` と \`text-low\` を用います。これらは伝えたい情報の重さによって使い分けてください。
この使い分けは「意味を持たない色」であるのでさほど厳密ではありませんが，ページ間で統一することは必要です。例えばあるページではtop-levelのCardのタイトルが \`text-shade-dark-default\` なのに，またあるページでは \`text-low\` である，このようなことは避けるべきです。
        `}
        />
        <Source />
        <DocsStory id="example-typography--colors" />
      </Fragment>
    ),
  },
};

export const Texts = (): JSX.Element => {
  return (
    <Fragment>
      {Object.values(variants).map((v) => (
        <div className="mb-4 flex flex-col" key={v}>
          <Text variant="caption">Variant: {v}</Text>
          <Text variant={v}>
            {short}
            {body.includes(v) && (
              <Fragment>
                <br />
                {long}
              </Fragment>
            )}
          </Text>
        </div>
      ))}
    </Fragment>
  );
};

Texts.parameters = {
  title: 'Texts',
  docs: {
    source: {
      language: 'tsx',
      code: `
import { Text } from '@4design/for-ui'

...

${Object.values(variants)
  .map(
    (v) => `<Text variant="${v}">Freelance エンジニアに「いい案件」を。</Text>
`,
  )
  .join('')}

// Or

import { Text, variants } from '@4design/for-ui'

<Text variant={varianets.p}>テキスト</Text>
`,
    },
    description: { story: `# hello` },
    page: () => (
      <Fragment>
        <Title />
        <Subtitle>Texts - タイポグラフィを簡易的にマッピングしたコンポーネント</Subtitle>
        <Description
          markdown={`
**注意: このコンポーネントは現在整理中です**

Typographを適切にスタイリングすることはときに冗長なことがあります。そこでよくつかうセットを文字のサイズと文字の色を組み合わせた状態でコンポーネントとして用意しました。
文字を表現する際に，このコンポーネントの使用を強制するものではありません。ただしデザインのリファクタリングがしやすいよう，決まったところ（ページのタイトルなど）でこのコンポーネントを使用するのは妥当と言えます。
またinput内などでコンポーネントを使えないときのため，styleのみのexportもされています。\`import { typographyStyles } from '@4design/for-ui'\` で使うことができます
        `}
        />
        <Source />
        <DocsStory id="example-typography--texts" />
      </Fragment>
    ),
  },
};
