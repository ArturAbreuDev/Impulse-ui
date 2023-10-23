import { Meta, Story } from '@storybook/react'
import { ButtonApp } from '@impulse-ui/react'

export default {
  title: 'Button',
  component: ButtonApp,
  args: {
    children: 'Enviar',
  },
} as Meta

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: Story = (args: any) => <ButtonApp {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isBig: false,
  isBlue: false,
  isRed: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  isBig: false,
  isBlue: true,
  isRed: false,
}
