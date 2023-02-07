import { FC, isValidElement, ReactNode, ReactElement } from 'react';

export type TextDefaultStylerProps = {
  content: ReactNode;
  defaultRenderer: FC<{ children: Exclude<ReactNode, ReactElement> }>;
};

export const TextDefaultStyler: FC<TextDefaultStylerProps> = ({ content, defaultRenderer: DefaultRenderer }) => {
  if (!content) {
    return null;
  }
  if (isValidElement(content)) {
    return content;
  }
  return <DefaultRenderer>{content}</DefaultRenderer>;
};
