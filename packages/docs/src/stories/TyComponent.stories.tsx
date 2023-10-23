import TyComponent from '@impulse-ui/react/src/components/TyComponent'
import { Meta } from '@storybook/react'
export default {
  title: 'TyComponent',
  component: TyComponent,
  argTypes: {
    checkoutLink: { control: 'text' },
    FirstName: { control: 'text' },
    vslId: { control: 'text' },
    vslIdEmail: { control: 'text' },
    isVisible: { control: 'boolean' },
    timeVsl: { control: 'number' },
    urlImage: { control: 'text' },
    setIsVisible: { action: 'setIsVisible' },
    Subtitle: { control: 'text' },
    Price: { control: 'text' },
    SubtitleTwo: { control: 'text' },
    TextButton: { control: 'text' },
    Title: { control: 'text' },
    TitleTwo: { control: 'text' },
    ColorTitle: { control: 'text' },
    ColorPrice: { control: 'text' },
  },
} as Meta

export const Default = (args: {
  checkoutLink: string
  FirstName: string
  vslId: string | undefined
  vslIdEmail: string | undefined
  isVisible: boolean
  timeVsl: number
  urlImage: string
  Subtitle?: string
  Price?: string
  SubtitleTwo?: string
  TextButton?: string
  Title?: string
  TitleTwo?: string
  ColorTitle?: string
  ColorPrice?: string

  setIsVisible: (isVisible: boolean) => void
}) => (
  <TyComponent
    checkoutLink={args.checkoutLink}
    FirstName={args.FirstName}
    vslId={args.vslId}
    vslIdEmail={args.vslIdEmail}
    isVisible={args.isVisible}
    timeVsl={args.timeVsl}
    urlImage={args.urlImage}
    setIsVisible={args.setIsVisible}
    Subtitle={args.Subtitle}
    Price={args.Price}
    SubtitleTwo={args.SubtitleTwo}
    TextButton={args.TextButton}
    Title={args.Title}
    TitleTwo={args.TitleTwo}
    ColorTitle={args.ColorTitle}
    ColorPrice={args.ColorPrice}
  />
)

export const Eua = (args: {
  checkoutLink: string
  FirstName: string
  vslId: string | undefined
  vslIdEmail: string | undefined
  isVisible: boolean
  timeVsl: number
  urlImage: string
  Subtitle?: string
  Price?: string
  SubtitleTwo?: string
  TextButton?: string
  Title?: string
  TitleTwo?: string
  ColorTitle?: string
  ColorPrice?: string

  setIsVisible: (isVisible: boolean) => void
}) => (
  <TyComponent
    checkoutLink={args.checkoutLink}
    FirstName={args.FirstName}
    vslId={args.vslId}
    vslIdEmail={args.vslIdEmail}
    isVisible={args.isVisible}
    timeVsl={args.timeVsl}
    urlImage={args.urlImage}
    setIsVisible={args.setIsVisible}
    Subtitle={args.Subtitle}
    Price={args.Price}
    SubtitleTwo={args.SubtitleTwo}
    TextButton={args.TextButton}
    Title={args.Title}
    TitleTwo={args.TitleTwo}
    ColorTitle={args.ColorTitle}
    ColorPrice={args.ColorPrice}
  />
)
export const Latam = (args: {
  checkoutLink: string
  FirstName: string
  vslId: string | undefined
  vslIdEmail: string | undefined
  isVisible: boolean
  timeVsl: number
  urlImage: string
  Subtitle?: string
  Price?: string
  SubtitleTwo?: string
  TextButton?: string
  Title?: string
  TitleTwo?: string
  ColorTitle?: string
  ColorPrice?: string
  setIsVisible: (isVisible: boolean) => void
}) => (
  <TyComponent
    checkoutLink={args.checkoutLink}
    FirstName={args.FirstName}
    vslId={args.vslId}
    vslIdEmail={args.vslIdEmail}
    isVisible={args.isVisible}
    timeVsl={args.timeVsl}
    urlImage={args.urlImage}
    setIsVisible={args.setIsVisible}
    Subtitle={args.Subtitle}
    Price={args.Price}
    SubtitleTwo={args.SubtitleTwo}
    TextButton={args.TextButton}
    Title={args.Title}
    TitleTwo={args.TitleTwo}
    ColorTitle={args.ColorTitle}
    ColorPrice={args.ColorPrice}
  />
)
