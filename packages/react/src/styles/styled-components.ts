import {
  colors,
  fontWeights,
  fontSizes,
  fonts,
  lineHeights,
  radii,
  space,
} from '@impulse-ui/tokens'
import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors,
  fontWeights,
  fontSizes,
  fonts,
  lineHeights,
  radii,
  space,
}

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: ${(props) => theme.fontSizes};
    color: ${(props) => theme.colors};
    font-weight: ${(props) => theme.fontWeights};
    font-family: ${(props) => theme.fonts};
    line-height: ${(props) => theme.lineHeights};
  }
`

export default theme
