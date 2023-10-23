import styled from 'styled-components'

export default {
  Container: styled.div`
    width: 100%;
    padding: 0 24px;

    @media only screen and (max-width: 990px) {
      padding: 0;
    }
  `,
  ContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
  `,
  Input: styled.input`
    width: -webkit-fill-available;

    margin: 4px 0;
    background: white;
    font-size: 16px;
    color: #757575;
    font-weight: 400;
    border: 1px solid rgb(0, 0, 0);
    padding: 12px 18px;
    vertical-align: middle;
    line-height: 1.4;
    min-height: 40px;
    border-radius: 10px;
    box-shadow: 0 0 0 3px rgb(0 0 0 / 5%);
  `,
  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  FooterButtons: styled.div``,
  SubmitButton: styled.button`
    background: #61ce70;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    margin: 8px 0;

    display: block;
    padding: 20px 40px;
    text-transform: uppercase;
    width: 100%;
    font-weight: 900;
    font-size: 18px;
    transition:
      opacity 0.3s,
      background-color 0.3s;

    :hover {
      opacity: 1;
      background-color: #fba728;
    }
  `,
  Terms: styled.label`
    font-family: 'Roboto', Sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #000;
    text-align: center;
    margin-bottom: 8px;
  `,
  Button: styled.input<any>`
    height: ${({ height }) => height};
    background-color: white;
    border: 1px solid #1d1e1c;
    border-radius: 8px;
    padding: 0 16px;
    color: black;
    width: ${({ width }) => width};
  `,
  ButtonText: styled.small`
    font-family: 'Roboto', Sans-serif;
    font-size: 17px;
    font-weight: 500;

    color: #000000;
    margin-bottom: 4px;
  `,
  ButtonContainer: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  Label: styled.label`
    font-family: 'Roboto', Sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: #000;
    margin-bottom: 8px;
  `,
  Select: styled.select`
    width: 100%;
    height: 40px;
    background-color: white;
    color: black;
    border-radius: 8px;
    padding: 0 16px;
  `,
}
