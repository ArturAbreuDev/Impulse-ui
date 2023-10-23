import { contrys } from '../../utils/ES/index'

export interface IForm {
  data?: any
}

export type IFormLayout = IForm

export interface IButton {
  width: string
  height?: string
}

export const smartphones = [
  {
    id: 1,
    name: 'Smartphone',
  },
  {
    id: 2,
    name: 'Tableta',
  },
  {
    id: 3,
    name: 'Computador',
  },
  {
    id: 4,
    name: 'Notebook',
  },
]

export const yesOrNot = [
  {
    id: 1,
    name: 'Sí',
  },
  {
    id: 2,
    name: 'No',
  },
]

export const contry = contrys?.contrys
