import styled from 'styled-components'

interface TermsProps {
  colorTitle?: string
  colorText?: string
  backgroundModal?: string | undefined
}

export default {
  Wrapped: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  ImageContainer: styled.div`
    height: 100vh;
    width: 100%;

    position: fixed;
    background: url('/1.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.1;
  `,
  Container: styled.div`
    height: auto;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding: 24px 0;

    @media only screen and (max-width: 990px) {
      width: fit-content;
    }
  `,
  Content: styled.div`
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 990px) {
      padding: 24px;
    }
  `,
  FooterContainer: styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    z-index: 1;
  `,
  ModalContainer: styled.div<TermsProps>`
    width: 100%;
    margin: 10% 0;
    padding: 60px 80px 60px 80px;

    background: ${(props) =>
      props.backgroundModal ? props.backgroundModal : '#fff'};
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.9px);

    display: flex;
    flex-direction: column;
    gap: 64px;

    @media only screen and (max-width: 990px) {
      flex-direction: column;
      padding: 60px 24px;
    }
  `,
  ModalTitle: styled.h1<TermsProps>`
    color: ${(props) => (props.colorTitle ? props.colorTitle : '#5837a4')};
    font-family: 'Spartan', Sans-serif;
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 19px;

    @media only screen and (max-width: 990px) {
      font-size: 1.5rem;
    }
  `,
  ModalContent: styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
  `,
  TermsContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,
  TermsTitle: styled.p<TermsProps>`
    color: ${(props) => (props.colorTitle ? props.colorTitle : '#5837a4')};
    font-family: 'Spartan', Sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 19px;

    @media only screen and (max-width: 990px) {
      font-size: 1.3rem;
    }
  `,
  TermsContent: styled.p<TermsProps>`
    color: ${(props) => (props.colorText ? props.colorText : '#000')};
    font-family: 'Spartan', Sans-serif;
    font-size: 1rem;
    font-weight: 600;
    line-height: 19px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    ul {
      margin-left: 16px;
    }

    @media only screen and (max-width: 990px) {
      font-size: 1 rem;
    }
  `,
}
