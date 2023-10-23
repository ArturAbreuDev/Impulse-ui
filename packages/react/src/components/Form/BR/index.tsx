/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import S from './styles'
import { smartphones, yesOrNot, states } from './data'

interface Option {
  id: number
  name: string
  value?: string
}

interface TermsProps {
  connection?: boolean
  smartphone?: boolean
  hours?: boolean | undefined
  children?: any
}

export function FormBR({
  connection = true,
  smartphone = true,
  hours = true,
  children,
}: TermsProps) {
  const [urlParams, setUrlParams] = useState<URLSearchParams | null>(null)
  const [selectedOption, setSelectedOption] = useState<string>('')

  const handleOptionChange = (option: string) => {
    setSelectedOption(option)
  }

  useEffect(() => {
    const queryStringCapt = window.location.search
    setUrlParams(new URLSearchParams(queryStringCapt))
  }, [])

  const handdleSubmit = () => {
    const utm_campaign_capt = ''
    const utm_medium_capt = ''
    const utm_source_capt = ''
    const utm_content_capt = ''
    const utm_term_capt = ''
    const gclid = ''
    const project = ''
    const url = ''

    const utm_campaignElement = document.getElementById(
      'utm_campaign',
    ) as HTMLInputElement
    const utm_mediumElement = document.getElementById(
      'utm_medium',
    ) as HTMLInputElement
    const utm_sourceElement = document.getElementById(
      'utm_source',
    ) as HTMLInputElement
    const utm_contentElement = document.getElementById(
      'utm_content',
    ) as HTMLInputElement
    const utm_termElement = document.getElementById(
      'utm_term',
    ) as HTMLInputElement
    const gclidElement = document.getElementById(
      'gclid_field',
    ) as HTMLInputElement
    const projectElement = document.getElementById(
      'produto',
    ) as HTMLInputElement
    const urlElement = document.getElementById('url') as HTMLInputElement

    utm_campaignElement.value = utm_campaign_capt || ''
    utm_mediumElement.value = utm_medium_capt || ''
    utm_sourceElement.value = utm_source_capt || ''
    utm_contentElement.value = utm_content_capt || ''
    utm_termElement.value = utm_term_capt || ''
    gclidElement.value = gclid || ''
    projectElement.value = project || ''
    urlElement.value = url || ''
  }

  return (
    <S.Container>
      <div>
        <S.Form
          method="POST"
          action="https://immersioltda49907.activehosted.com/proc.php"
          id="form_641"
        >
          <input type="hidden" name="u" value="641" />
          <input type="hidden" name="f" value="641" />
          <input type="hidden" name="s" />
          <input type="hidden" name="c" value="0" />
          <input type="hidden" name="m" value="0" />
          <input type="hidden" name="act" value="sub" />
          <input type="hidden" name="v" value="2" />
          <input
            type="hidden"
            name="or"
            value="61ccc61588d223d37845d01ea424aab9"
          />

          <S.ContentContainer>
            <S.InputContainer>
              <S.Label>Selecione seu estado</S.Label>
              <S.Select id="field[578]" name="field[578]">
                {states?.map(({ id, name, value }: any) => (
                  <option key={id} value={value}>
                    {name}
                  </option>
                ))}
              </S.Select>
            </S.InputContainer>
            {connection ? (
              <S.InputContainer>
                <S.Label>Você possui conexão com a internet </S.Label>
                {yesOrNot?.map(({ id, name }: Option) => (
                  <S.ButtonContainer key={id}>
                    <S.Button
                      id="field[580]"
                      name="field[580]"
                      type="checkbox"
                      width="12px"
                      checked={selectedOption === name}
                      onChange={() => handleOptionChange(name)}
                      height="12px"
                    />
                    <S.ButtonText>{name}</S.ButtonText>
                  </S.ButtonContainer>
                ))}
              </S.InputContainer>
            ) : null}
            {smartphone ? (
              <S.InputContainer>
                <S.Label>
                  Você possui algum celular smartphone, tablet, computador ou
                  notebook?
                </S.Label>
                {smartphones?.map(({ id, name }: Option) => (
                  <S.ButtonContainer key={id}>
                    <S.Button
                      type="checkbox"
                      id="field[581]"
                      name="field[581]"
                      width="12px"
                      height="12px"
                    />
                    <S.ButtonText>{name}</S.ButtonText>
                  </S.ButtonContainer>
                ))}
              </S.InputContainer>
            ) : null}
            {hours ? (
              <S.InputContainer>
                <S.Label>Quantas horas por semana você tem disponível?</S.Label>
                <S.Button
                  id="field[504]"
                  name="field[504]"
                  type="time"
                  width="200px"
                  height="40px"
                />
              </S.InputContainer>
            ) : null}
            {children}
            <S.FooterButtons>
              <S.InputContainer>
                <S.Input
                  type="text"
                  name="fullname"
                  id="fullname"
                  data-name="fullname"
                  placeholder="Digite seu nome"
                  required
                />
              </S.InputContainer>
              <S.InputContainer>
                <S.Input
                  type="email"
                  name="email"
                  id="email"
                  data-name="email"
                  placeholder="Digite seu e-mail"
                  required
                />
              </S.InputContainer>
              <S.InputContainer>
                <S.Input
                  type="telephone"
                  name="phone"
                  id="phone"
                  data-name="phone"
                  placeholder="Digite seu telefone com DDD"
                  required
                />
              </S.InputContainer>
            </S.FooterButtons>
            <div onClick={() => handdleSubmit()}>
              <S.SubmitButton>ENVIAR</S.SubmitButton>
            </div>
            <S.Terms>
              🔒 Ao preencher o formulário, você está de acordo com os nossos
              Termos de Serviço e{' '}
              <a href="/politicas-de-privacidade">Políticas de Privacidade.</a>.
            </S.Terms>

            <input type="hidden" name="field[495]" id="utm_campaign" value="" />
            <input type="hidden" name="field[494]" id="utm_medium" value="" />
            <input type="hidden" name="field[493]" id="utm_source" value="" />
            <input type="hidden" name="field[497]" id="utm_term" value="" />
            <input type="hidden" name="field[496]" id="utm_content" value="" />
            <input type="hidden" name="field[498]" id="gclid" value="" />
            <input
              type="hidden"
              name="field[793]"
              id="msclkid_field"
              value=""
            />
            <input type="hidden" name="field[590]" id="url" value="" />
            <input type="hidden" name="field[786]" id="produto" value="" />
          </S.ContentContainer>
        </S.Form>
      </div>
    </S.Container>
  )
}
