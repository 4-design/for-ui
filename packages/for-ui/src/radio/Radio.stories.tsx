import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { LegacyText as Text } from '../typography';
import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';

export default {
  title: 'Form / Radio',
  component: Radio,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <div className="mt-10 flex h-screen w-screen flex-col gap-4">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Base = (): JSX.Element => {
  const [selected, setSelected] = React.useState<string>();

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="mb-4 border-b">
        <Text variant="h3">Radio</Text>
      </div>

      <div>
        <Radio name="radio-buttons" value="a" checked={selected === 'a'} onChange={handleRadioChange} />
        <Radio name="radio-buttons" value="b" checked={selected === 'b'} onChange={handleRadioChange} />
        <Radio name="radio-buttons" value="c" disabled checked={selected === 'c'} onChange={handleRadioChange} />
        <Radio name="radio-buttons" value="d" disabled checked onChange={handleRadioChange} />
      </div>

      <div>
        <RadioGroup required label="サービス名" onChange={handleRadioChange} error="必須項目です">
          <Radio label="Relance" value="relance" />
          <Radio label="Sreake Sonar" value="sreake-sonar" />
          <Radio label="Reckoner" value="reckoner" disabled />
        </RadioGroup>
      </div>
    </div>
  );
};

export const WithLabel = (): JSX.Element => {
  const handleRadioChange = (e) => {
    console.error(e.target.value);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="mb-4 border-b">
        <Text variant="h3">Radio</Text>
      </div>

      <div>
        <RadioGroup required label="サービス名" onChange={handleRadioChange}>
          <Radio label="Relance" value="relance" />
          <Radio label="Sreake Sonar" value="sreake-sonar" />
          <Radio label="Reckoner" value="reckoner" disabled />
        </RadioGroup>
      </div>

      <div>
        <RadioGroup required label="サービス名" onChange={handleRadioChange} error="必須項目です">
          <Radio label="Relance" value="relance" />
          <Radio label="Sreake Sonar" value="sreake-sonar" />
          <Radio label="Reckoner" value="reckoner" disabled />
        </RadioGroup>
      </div>
    </div>
  );
};

export const WithNopadding = (): JSX.Element => {
  const handleRadioChange = (e) => {
    console.info(e.target.value);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="mb-4 border-b">
        <Text variant="h3">Radio</Text>
      </div>

      <div>
        <RadioGroup required label="サービス名" onChange={handleRadioChange}>
          <Radio nopadding label="Relance" value="relance" />
          <Radio nopadding label="Sreake Sonar" value="sreake-sonar" />
          <Radio nopadding label="Reckoner" value="reckoner" disabled />
        </RadioGroup>
      </div>
    </div>
  );
};
