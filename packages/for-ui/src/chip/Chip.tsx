import { ElementType, forwardRef, MouseEvent, ReactNode } from 'react';
import { ComponentProps, ElementTypeToHTMLElement, Ref } from '../system/polyComponent';
import { FullChip } from './FullChip';
import { LimitedChip } from './LimitedChip';

export type ChipProps<As extends ElementType = 'button'> = ComponentProps<
  {
    /**
     * ユーザーに提示したい意図 (e.g. エラーならばnegative) を指定
     *
     * @default 'shade'
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
     * @default 'full'
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
    onClick: (e: MouseEvent<ElementTypeToHTMLElement<As>>) => void;

    className?: string;
  },
  As
>;

type ChipComponent = <As extends ElementType = 'button'>(props: ChipProps<As>) => ReactNode;

export const Chip: ChipComponent = forwardRef(
  <As extends ElementType = 'button'>({ clickableArea = 'full', ...props }: ChipProps<As>, ref?: Ref<As>) =>
    ({
      full: <FullChip<As> {...props} ref={ref} />,
      limited: <LimitedChip<As> {...props} ref={ref} />,
    }[clickableArea]),
);

////////////////////

// const _Chip = <As extends ElementType = 'button'>({
//   clickableArea = 'full',
//   ...props
// }: ChipPropsWithoutRef<As> & { _ref?: ComponentPropsWithRef<As>["ref"]; }): JSX.Element =>
//   ({
//     full: <FullChip<As> {...props} />,
//     limited: <LimitedChip<As> {...props} />,
//   }[clickableArea]);

// export type ChipProps<As extends ElementType = 'button'> = ChipPropsWithoutRef<As> &
// // {  ref?: Ref<As extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[As] : As> };
// RefAttributes<ComponentPropsWithRef<As>["ref"]>

// export const Chip = forwardRef((props: ChipPropsWithoutRef<ElementType>, ref: ComponentPropsWithRef<ElementType>["ref"]) => (
//   <_Chip {...props} _ref={ref} />
// )) as <As extends ElementType = 'button'>(props: ChipProps<As>) => JSX.Element | null;

// type ChipProps<As extends ElementType = 'button'> = PolymorphicComponentPropWithRef<
//   As,
//   ChipPropsWithoutRef
// >
