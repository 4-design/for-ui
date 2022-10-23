import React, { Fragment } from 'react';
import { Title, Subtitle, Description, Source, DocsStory } from '@storybook/addon-docs/blocks';
import { Meta } from '@storybook/react/types-6-0';
import clsx from 'clsx';
import { Text } from '../typography';

export default {
  title: 'Example / Spacer',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const spacers = {
  'コンポーネント内部 小 p-1 m-1 gap-1': `w-1 h-1`,
  'コンポーネント内部 大 p-2 m-2 gap-2': `w-2 h-2`,
  'コンポーネント間 小 p-3 m-3 gap-3': `w-3 h-3`,
  'コンポーネント間 大 p-4 m-4 gap-4': `w-4 h-4`,
  'コンポーネント包含 小 p-6 m-6 gap-6': `w-6 h-6`,
  'コンポーネント包含 大 p-8 m-8 gap-8': `w-8 h-8`,
};

export const Constraints = () => {
  return (
    <Fragment>
      {Object.entries(spacers).map(([k, v]) => (
        <Fragment key={k}>
          <Text variant="caption">{k}</Text>
          <div className={clsx([v, `bg-primary-dark-default`])} />
        </Fragment>
      ))}
    </Fragment>
  );
};

Constraints.parameters = {
  title: 'Constraints',
  docs: {
    source: {
      language: 'tsx',
      code: `
{ /* コンポーネント内部 */ }

<div className="p-1">小</div>
<div className="m-1">小</div>
<div className="gap-1">小</div>

<div className="p-2">大</div>
<div className="m-2">大</div>
<div className="gap-2">大</div>

{ /* コンポーネント間 */ }

<div className="p-3">小</div>
<div className="m-3">小</div>
<div className="gap-3">小</div>

<div className="p-4">大</div>
<div className="m-4">大</div>
<div className="gap-4">大</div>

{ /* コンポーネント包含 */ }

<div className="p-6">小</div>
<div className="m-6">小</div>
<div className="gap-6">小</div>

<div className="p-8">大</div>
<div className="m-8">大</div>
<div className="gap-8">大</div>
`,
    },
    page: () => (
      <Fragment>
        <Title />
        <Subtitle>Spacer - 余白や高さ幅に関するドキュメント</Subtitle>
        <Description
          markdown={`
Tailwind CSS では Spacing と名前がつけられていますが，for-uiでは違いを明確にするためあえて **Spacer** として違う名前をつけています。
ここでの違いは，Tailwind CSS の Spacing の概念が width や height の概念も含むのに対して，Spacer では margin ・ padding ・ gap にのみ適用される概念となります。
width や height に関しては，今まで通り https://tailwindcss.com/docs/width や https://tailwindcss.com/docs/height を参照してお使いください。

Spacer は他のコンポーネントやスタイルとは違い，特別な書き方が用意されているわけではありません。
これは Spacer が複合的になりうること（例えば丸角のセーフエリアとカード内のpaddingを足した値になる，など）などを考慮してこのようになっています。
言い換えれば，簡単に制約を破ることができてしまいますが，Figmaを慎重に参照しつつ実装してください。

## 制約

ここでいうコンポーネントとは，Atomic Designでいう，Atomに相当します。たとえばTextFieldのinput部分です。

### "コンポーネント内部"について

コンポーネント内部というのは，たとえば \`TextField\` コンポーネントを設計する時に，input の周りの枠線とテキスト部分がどのくらい離れているかを指します。
つまり，テキストやアイコン同士，または境界からの Spacer です。

例: TextFieldとLabelの間のSpacer

### "コンポーネント間"について

コンポーネント間というのは，たとえば \`TextField\` を2つ並べたとときに，2つのコンポーネントの間の隙間のことを指します。
つまり，同列で並ぶコンポーネントの Spacer です。

例: TextFieldとTextFieldの間のSpacer

### "コンポーネント包含"について

コンポーネント包含というのは，たとえば \`TextField\` コンポーネントを含むCardを2つ以上並べて作るときに，同列に並ぶCard同士の間の隙間のことを指します。
つまり，同列で並ぶ，コンポーネントの集合を含むようなコンポーネントの Spacer です。

例: CardとCardの間のSpacer
`}
        />
        <Source />
        <DocsStory id="example-spacer--constraints" />
      </Fragment>
    ),
  },
};
