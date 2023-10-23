import styled from 'styled-components'

export type ButtonProps = {
  isBig?: boolean | undefined
  isBlue?: boolean | undefined
  isRed?: boolean | undefined
  children?: any
}

const Button = styled.button`
  border: none;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-family: Poppins, sans-serif;
  height: 89px;
  font-size: 30px;
  font-weight: 600;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  width: auto;
  border-radius: 17px;
  background: rgb(53, 186, 72);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;

  ${({ isBig }: any) =>
    isBig &&
    `
    font-size: 40px;
    height: 100px;
  `}

  ${({ isBlue, isRed }: any) => `
    background: ${isBlue ? 'blue' : isRed ? 'red' : 'rgb(53, 186, 72)'};
  `}
`

export function ButtonApp({ children, isBig, isBlue, isRed }: ButtonProps) {
  return <Button>{children}</Button>
}
