import { Stepper } from './Stepper'
import { Step } from './Step'
import { Text } from '../typography/Typography'
import { Meta, Story } from '@storybook/react/types-6-0'
import 'twin.macro'

export default {
  title: 'Atom/Stepper',
  component: Stepper,
  argTypes: {
    activeStep: { control: { min: 0 } },
    alternativeLabel: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story: Story) => (
      <div tw="mt-10">
        <Story />
      </div>
    ),
  ],
} as Meta

const steps = ['First', 'Second', 'Third', 'Last']

const Template: Story = (args) => {
  return (
    <div>
      <div tw="border-b mb-4">
        <Text variant="h3">Stepper</Text>
      </div>
      <Stepper alternativeLabel={true} activeStep={1} {...args}>
        {steps.map((step, index) => (
          <Step key={index}>{step}</Step>
        ))}
      </Stepper>
    </div>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  activeStep: 0,
  alternativeLabel: true,
  backgroundColor: '',
}
