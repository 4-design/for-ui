import { ComponentPropsWithoutRef, FC, MouseEvent, ReactNode } from 'react';
import { FullChip } from './FullChip';
import { LimitedChip } from './LimitedChip';

export type ChipProps = Omit<ComponentPropsWithoutRef<'button'>, 'color'> & {
  /**
   * ユーザーに提示したい意図 (e.g. エラーならばnegative) を指定
   *
   * @default shade
   */
  intention?: 'shade' | 'primary' | 'secondary' | 'positive' | 'negative' | 'notice' | 'informative';

  /**
   * ラベルを指定
   */
  label: string;

  /**
   * クリックできる範囲を指定
   *
   * 通常、limitedは削除可能なChipに使い、他の用途ではなるべくfullを使うことが推奨されます。
   *
   * @default full
   */
  clickableArea?: 'full' | 'limited';

  /**
   * アイコンを指定
   *
   * clickableAreahがlimitedの場合、デフォルトのiconは (Xボタン) になります。
   */
  icon?: ReactNode;

  /**
   * クリックしたときの動作を指定
   *
   * これは必須項目です。クリックできないものについてはBadgeの使用を検討してください。
   * クリックできる範囲はclickableArea propsで指定してください。
   */
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;

  className?: string;
};

export const Chip: FC<ChipProps> = ({ clickableArea = 'full', ...props }) =>
  ({
    full: <FullChip {...props} />,
    limited: <LimitedChip {...props} />,
  }[clickableArea]);
