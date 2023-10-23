import styled from 'styled-components'

interface ContainerProps {
  background?: string
}

interface RightContentProps {
  color?: string
  visible?: boolean
}

export default {
  Container: styled.div<ContainerProps>`
    background-color: ${(props) =>
      props.background ? props.background : '#004aad'};
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: auto;
  `,

  Content: styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 80%;
    @media only screen and (max-width: 990px) {
      flex-direction: column;
      margin-bottom: 15px;
      width: 100%;
    }
  `,
  Image: styled.img`
    display: block;
    width: 254px;
    height: 130px;
    @media only screen and (max-width: 990px) {
      width: 231px;
      height: 130px;
    }
  `,
  TermsContainer: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;

    @media only screen and (max-width: 990px) {
      align-items: center;
    }
  `,
  Termsline: styled.div<RightContentProps>`
    color: ${(props) => (props.color ? props.color : '#004aad')};
    font-family: 'Roboto', Sans-serif;
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    text-decoration: underline;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

    cursor: pointer;
  `,
  RightContent: styled.div<RightContentProps>`
    p {
      color: ${(props) => (props.color ? props.color : '#004aad')};
      display: ${(props) => (props.visible ? 'flex' : 'None')};
      font-family: 'Roboto', Sans-serif;
      font-size: 15px;
      font-weight: 500;
      font-style: normal;
      @media only screen and (max-width: 990px) {
        font-size: 12px;
      }
    }

    @media only screen and (max-width: 990px) {
      display: none;
    }
  `,
}
