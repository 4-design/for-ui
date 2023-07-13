import { FC, ReactNode, useId } from 'react';
import { fsx } from '../system/fsx';
import { Text } from '../text';

export type CalloutProps = {
  /**
   * 操作の意図を示す場合に指定
   *
   * 例: 通常、コンテンツの削除など取り返しのつかないユーザーの操作を赤色で表示しますが、その場合intentionにnegativeを設定してください。
   *
   * @default subtle
   */
  intention?: 'subtle' | 'positive' | 'negative' | 'notice' | 'informative';

  /**
   * iconを表示する場合に設定
   *
   * 色や大きさはCallout側から設定するので指定しないでください。例: `icon={<MdErrorOutline />}`
   */
  icon?: ReactNode;

  /**
   * 表示させるテキストを指定
   *
   * リンク等を入れられるようReactNodeにしてありますが、通常はstringを指定してください。Button等は含めないでください。
   */
  children: ReactNode;
};

export const Callout: FC<CalloutProps> = ({ icon, children, intention = 'subtle', ...props }) => {
  const descriptionId = useId();
  return (
    <Text
      role={intention === 'negative' ? 'alert' : 'status'}
      aria-describedby={descriptionId}
      {...props}
      className={fsx([
        `flex gap-1 rounded border px-2 py-1`,
        {
          subtle: `border-shade-light-default text-shade-medium-default bg-shade-light-default fill-shade-medium-default`,
          positive: `border-positive-light-default text-positive-dark-default bg-positive-light-default fill-positive-medium-default`,
          negative: `border-negative-light-default text-negative-dark-default bg-negative-light-default fill-negative-medium-default`,
          notice: `border-notice-light-default text-notice-dark-default bg-notice-light-default fill-notice-medium-default`,
          informative: `border-informative-light-default text-informative-dark-default bg-informative-light-default fill-informative-medium-default`,
        }[intention],
      ])}
    >
      {icon && (
        <span
          className={fsx(`grid h-6 w-4 shrink-0 place-items-center [&_svg]:h-4 [&_svg]:w-4 [&_svg]:fill-inherit`)}
          aria-hidden
        >
          {icon}
        </span>
      )}
      <Text id={descriptionId} size="r" weight="regular" typeface="sansSerif">
        {children}
      </Text>
    </Text>
  );
};
