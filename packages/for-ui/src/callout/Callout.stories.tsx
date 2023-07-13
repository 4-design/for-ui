import { MdErrorOutline } from 'react-icons/md';
import { Meta } from '@storybook/react/types-6-0';
import { Callout } from './Callout';

const sampleIcons = {
  undefined,
  MdErrorOutline: <MdErrorOutline />,
};

export default {
  title: 'Feedback / Callout',
  component: Callout,
  argTypes: {
    intention: ['subtle', 'positive', 'negative', 'notice', 'informative'],
    icon: {
      options: Object.keys(sampleIcons),
      mapping: sampleIcons,
    },
  },
} as Meta;

export const Playground = {
  args: {
    children: 'テキスト',
    icon: 'MdErrorOutline',
  },
};
