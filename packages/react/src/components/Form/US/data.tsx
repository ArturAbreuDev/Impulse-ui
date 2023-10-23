/* eslint-disable prettier/prettier */
import { contrys } from '../../utils/US/index'

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
    name: 'Tablet',
  },
  {
    id: 3,
    name: 'Computer',
  },
  {
    id: 4,
    name: 'Notebook',
  },
]

export const yesOrNot = [
  {
    id: 1,
    name: 'Yes',
  },
  {
    id: 2,
    name: 'No',
  },
]

export const contry = contrys?.contrys;
