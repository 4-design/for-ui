import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType } from 'react';
import { PreservedOmit } from './preservedOmit';

export type Ref<As extends ElementType> = ComponentPropsWithRef<As>['ref'];

export type RefProps<As extends ElementType> = { ref?: Ref<As> };

export type AsProps<As extends ElementType> = {
  /**
   * レンダリングするコンポーネントを指定 (例: button, a, input)
   */
  as?: As;
};

export type ComponentProps<Props extends object, As extends ElementType> = AsProps<As> &
  Props &
  RefProps<As> &
  PreservedOmit<ComponentPropsWithoutRef<As>, keyof (Props & AsProps<As> & RefProps<As>)>;

export type ElementTypeToHTMLElement<Element extends ElementType> = Element extends keyof HTMLElementTagNameMap
  ? HTMLElementTagNameMap[Element]
  : Element;
