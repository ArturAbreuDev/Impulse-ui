import TermsPageUs from '@impulse-ui/react/src/components/Terms/US'
import TermsPageEs from '@impulse-ui/react/src/components/Terms/ES'
import TermsPageBr from '@impulse-ui/react/src/components/Terms/BR'

import { Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'TermsPage',
  component: TermsPageBr,
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
      <TermsPageUs
        colorTitle={colorTitle}
        colorText={colorText}
        backgroundModal={backgroundModal}
        project={project}
      />
    )
  } else if (Copy === 'latam') {
    selectedComponent = (
      <TermsPageEs
        colorTitle={colorTitle}
        colorText={colorText}
        backgroundModal={backgroundModal}
        project={project}
      />
    )
  } else {
    selectedComponent = (
      <TermsPageBr
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
      <TermsPageUs
        colorTitle={colorTitle}
        colorText={colorText}
        backgroundModal={backgroundModal}
        project={project}
      />
    )
  } else if (Copy === 'latam') {
    selectedComponent = (
      <TermsPageEs
        colorTitle={colorTitle}
        colorText={colorText}
        backgroundModal={backgroundModal}
        project={project}
      />
    )
  } else {
    selectedComponent = (
      <TermsPageBr
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
      <TermsPageUs
        colorTitle={colorTitle}
        colorText={colorText}
        backgroundModal={backgroundModal}
        project={project}
      />
    )
  } else if (Copy === 'latam') {
    selectedComponent = (
      <TermsPageEs
        colorTitle={colorTitle}
        colorText={colorText}
        backgroundModal={backgroundModal}
        project={project}
      />
    )
  } else {
    selectedComponent = (
      <TermsPageBr
        colorTitle={colorTitle}
        colorText={colorText}
        backgroundModal={backgroundModal}
        project={project}
      />
    )
  }

  return selectedComponent
}
