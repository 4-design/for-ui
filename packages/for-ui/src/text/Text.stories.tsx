import { Meta } from '@storybook/react/types-6-0';
import { Text } from './Text';

export default {
  title: 'General / Text',
  component: Text,
} as Meta;

export const Base = {
  args: {
    size: 'r',
    children: 'For Design Systemで叶えるデザインシステムの夢。',
    as: 'span',
  },
};
