/* eslint-disable react/no-children-prop */
import { Meta } from '@storybook/react'
import { FormUS } from '@impulse-ui/react/src/components/Form/US'
import { FormES } from '@impulse-ui/react/src/components/Form/ES'
import { FormBR } from '@impulse-ui/react/src/components/Form/BR'

export default {
  title: 'Form',
  component: FormBR,
  args: {
    children: '',
  },
  argTypes: {
    Copy: {
      options: ['br', 'latam', 'eua'],
      control: { type: 'inline-radio' },
    },
    connection: { control: 'boolean' },
    smartphone: { control: 'boolean' },
    hours: { control: 'boolean' },
    children: {},
  },
} as Meta

export const Primary = ({
  Copy,
  connection,
  smartphone,
  hours,
  children,
}: never) => {
  let selectedComponent

  if (Copy === 'eua') {
    selectedComponent = (
      <FormUS
        connection={connection}
        smartphone={smartphone}
        hours={hours}
        children={children}
      />
    )
  } else if (Copy === 'latam') {
    selectedComponent = (
      <FormES
        connection={connection}
        smartphone={smartphone}
        hours={hours}
        children={children}
      />
    )
  } else {
    selectedComponent = (
      <FormBR
        connection={connection}
        smartphone={smartphone}
        hours={hours}
        children={children}
      />
    )
  }

  return selectedComponent
}

export const Secondary = ({
  Copy,
  connection,
  smartphone,
  hours,
  children,
}: never) => {
  let selectedComponent

  if (Copy === 'eua') {
    selectedComponent = (
      <FormUS
        connection={connection}
        smartphone={smartphone}
        hours={hours}
        children={children}
      />
    )
  } else if (Copy === 'latam') {
    selectedComponent = (
      <FormES
        connection={connection}
        smartphone={smartphone}
        hours={hours}
        children={children}
      />
    )
  } else {
    selectedComponent = (
      <FormBR
        connection={connection}
        smartphone={smartphone}
        hours={hours}
        children={children}
      />
    )
  }

  return selectedComponent
}

export const Tertiary = ({
  Copy,
  connection,
  smartphone,
  hours,
  children,
}: never) => {
  let selectedComponent

  if (Copy === 'eua') {
    selectedComponent = (
      <FormUS
        connection={connection}
        smartphone={smartphone}
        hours={hours}
        children={children}
      />
    )
  } else if (Copy === 'latam') {
    selectedComponent = (
      <FormES
        connection={connection}
        smartphone={smartphone}
        hours={hours}
        children={children}
      />
    )
  } else {
    selectedComponent = (
      <FormBR
        connection={connection}
        smartphone={smartphone}
        hours={hours}
        children={children}
      />
    )
  }

  return selectedComponent
}
