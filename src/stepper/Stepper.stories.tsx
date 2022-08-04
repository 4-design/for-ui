import { Meta, Story } from '@storybook/react/types-6-0'
import { Text } from '../typography/Typography'
import { Step } from './Step'
import { Stepper } from './Stepper'

export default {
  title: 'Navigation / Stepper',
  component: Stepper,
  argTypes: {
    activeStep: { control: { min: 1 } },
    alternativeLabel: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story: Story) => (
      <div className="mt-10">
        <Story />
      </div>
    ),
  ],
} as Meta

const steps = ['First', 'Second', 'Third', 'Last']

const Template: Story = (args) => {
  return (
    <div>
      <div className="border-b mb-4">
        <Text variant="h3">Stepper</Text>
      </div>
      <Stepper alternativeLabel={true} activeStep={0} {...args}>
        {steps.map((step, index) => (
          <Step key={index}>{step}</Step>
        ))}
      </Stepper>
      <Stepper alternativeLabel={true} activeStep={1} {...args}>
        {steps.map((step, index) => (
          <Step key={index}>{step}</Step>
        ))}
      </Stepper>
      <Stepper alternativeLabel={true} activeStep={2} {...args}>
        {steps.map((step, index) => (
          <Step key={index}>{step}</Step>
        ))}
      </Stepper>
      <Stepper alternativeLabel={true} activeStep={3} {...args}>
        {steps.map((step, index) => (
          <Step key={index}>{step}</Step>
        ))}
      </Stepper>
    </div>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  alternativeLabel: true,
}
