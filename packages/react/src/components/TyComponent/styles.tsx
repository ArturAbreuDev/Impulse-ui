import { m } from '@storybook/theming/dist/create-88d00753'
import styled from 'styled-components'

export default {
  Container: styled.div<any>`
    padding: 24px 60px;
    margin-bottom: 50px;
    img {
      width: 241px;
      height: 112px;
      margin-bottom: 50px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 990px) {
      padding: 0px 53px 60px 53px;
      margin: 0px ${({ isVisible }: any) => (isVisible ? '0px' : '0')};

      img {
        width: 103px;
        height: 29px;
        margin-top: 32px;
        margin-bottom: 24px;
      }
    }
  `,
  Name: styled.div<any>`
    margin: 0px 0 0;
    text-align: start;
    color: ${(props) => (props.ColorTitle ? props.ColorTitle : '#ad2a22')};
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    width: 100%;
    font-size: 41px;
    text-transform: uppercase;
    margin-top: 42px;
    border-radius: 26px;
    padding: 10px;
    br {
      @media only screen and (max-width: 990px) {
        display: none !important;
        white-space: nowrap;
      }
    }
    small {
      font-size: 41px;
      color: #ad2a22;
    }

    @media only screen and (max-width: 990px) {
      margin: 0;
      font-size: 17px;
      margin-bottom: 24px;
      text-align: center;

      small {
        border-radius: 5px;
        font-size: 18px;
        color: #ad2a22;
        text-transform: uppercase;
      }
    }
  `,

  ModalContainer: styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 1000px;

    @media only screen and (max-width: 990px) {
      flex-direction: column-reverse;
      height: auto;
    }
  `,
  LeftContent: styled.div`
    width: 30%;

    .content {
      width: 400px;
    }

    @media only screen and (max-width: 990px) {
      width: 100%;

      .content {
        width: 100%;
        height: auto;
        margin-top: 48px;
      }
    }
  `,
  RightContent: styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    height: 500px;
    @media only screen and (max-width: 990px) {
      width: 100%;
      height: auto;

      img {
        width: 50px;
      }
    }

    img {
      width: 45%;
      @media only screen and (max-width: 990px) {
        width: 50%;
        margin-top: 24px;
      }
    }
  `,

  Text: styled.div<any>`
    text-align: start;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 28px;
    margin-left: 18px;
    margin-top: 42px;

    small {
      color: ${(props) => (props.ColorPrice ? props.ColorPrice : '#ad2a22')};
      font-size: 28px;
    }

    @media only screen and (max-width: 990px) {
      margin: 0;
      display: flex;
      text-transform: uppercase;
      font-weight: 600;
      flex-direction: column;
      align-items: center;
      text-align: center;
      font-size: 18px;

      gap: 0px;

      small {
        width: 100%;
        border-radius: 5px;
        font-size: 20px;
        padding: 8px;
        color: ${(props) => (props.ColorPrice ? props.ColorPrice : '#ad2a22')};
        text-transform: uppercase;
      }
    }
  `,
  Button: styled.a`
    margin-top: 67px;
    width: 88%;
    text-align: center;
    text-transform: uppercase;
    background: #35ba48;
    color: #ffffff;
    padding: 1em 2em;
    display: inline-block;
    border-radius: 0.4em;
    font-size: 22px;
    font-family: 'Poppins', sans-serif;
    line-height: 1;
    font-weight: 600;
    text-transform: uppercase;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
    text-decoration: none;
    cursor: pointer;

    @media only screen and (max-width: 990px) {
      font-size: 13px;
      margin-top: 16px;
      width: 100%;
    }
  `,
}
