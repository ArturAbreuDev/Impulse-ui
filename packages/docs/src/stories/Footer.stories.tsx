import Footer from '@impulse-ui/react/src/components/Footer'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Footer',
  component: Footer,
  argTypes: {
    country: {
      options: ['br', 'latam', 'eua'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta

interface FooterArgs {
  urlImage: string
  color?: string
  visible?: boolean
  country?: 'br' | 'latam' | 'eua'
  background?: string
}

const Template: StoryFn<FooterArgs> = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  urlImage: 'sua-imagem.png',
  color: '#fff',
  visible: true,
  background: '',
}

export const Secondary = Template.bind({})
Secondary.args = {
  urlImage: 'sua-imagem.png',
  color: '',
  visible: true,
  background: '',
}
