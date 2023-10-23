import PrivacyPoliciesUs from '@impulse-ui/react/src/components/Privacy/US'
import PrivacyPoliciesEs from '@impulse-ui/react/src/components/Privacy/ES'
import PrivacyPoliciesBr from '@impulse-ui/react/src/components/Privacy/BR'

import { Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'PrivacyPolicies',
  component: PrivacyPoliciesBr,
  decorators: [withDesign],
  args: {
    colorTitle: '',
    colorText: '',
    backgroundModal: '',
    project: '',
  },
  argTypes: {
    Copy: {
      options: ['br', 'latam', 'eua'],
      control: { type: 'inline-radio' },
    },
    colorTitle: {
      control: 'color',
    },
    colorText: {
      control: 'color',
    },
    backgroundModal: {
      control: 'color',
    },
  },
} as Meta

export const Default = ({
  Copy,
  colorTitle,
  colorText,
  backgroundModal,
  project,
}: never) => {
  let selectedComponent

  if (Copy === 'eua') {
    selectedComponent = (
      <PrivacyPoliciesUs
        colorTitle={colorTitle}
        colorText={colorText}
        backgroundModal={backgroundModal}
        project={project}
      />
    )
  } else if (Copy === 'latam') {
    selectedComponent = (
      <PrivacyPoliciesEs
        colorTitle={colorTitle}
        colorText={colorText}
        backgroundModal={backgroundModal}
        project={project}
      />
    )
  } else {
    selectedComponent = (
      <PrivacyPoliciesBr
        colorTitle={colorTitle}
        colorText={colorText}
        backgroundModal={backgroundModal}
        project={project}
      />
    )
  }

  return selectedComponent
}
export const Secondary = ({
  Copy,
  colorTitle,
  colorText,
  backgroundModal,
  project,
}: never) => {
  let selectedComponent

  if (Copy === 'eua') {
    selectedComponent = (
      <PrivacyPoliciesUs
        colorTitle={colorTitle}
        colorText={colorText}
        backgroundModal={backgroundModal}
        project={project}
      />
    )
  } else if (Copy === 'latam') {
    selectedComponent = (
      <PrivacyPoliciesEs
        colorTitle={colorTitle}
        colorText={colorText}
        backgroundModal={backgroundModal}
        project={project}
      />
    )
  } else {
    selectedComponent = (
      <PrivacyPoliciesBr
        colorTitle={colorTitle}
        colorText={colorText}
        backgroundModal={backgroundModal}
        project={project}
      />
    )
  }

  return selectedComponent
}
export const Tertiary = ({
  Copy,
  colorTitle,
  colorText,
  backgroundModal,
  project,
}: never) => {
  let selectedComponent

  if (Copy === 'eua') {
    selectedComponent = (
      <PrivacyPoliciesUs
        colorTitle={colorTitle}
        colorText={colorText}
        backgroundModal={backgroundModal}
        project={project}
      />
    )
  } else if (Copy === 'latam') {
    selectedComponent = (
      <PrivacyPoliciesEs
        colorTitle={colorTitle}
        colorText={colorText}
        backgroundModal={backgroundModal}
        project={project}
      />
    )
  } else {
    selectedComponent = (
      <PrivacyPoliciesBr
        colorTitle={colorTitle}
        colorText={colorText}
        backgroundModal={backgroundModal}
        project={project}
      />
    )
  }

  return selectedComponent
}
