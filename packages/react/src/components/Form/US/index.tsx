/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import S from './styles'
import { smartphones, yesOrNot, contry } from './data'

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

export function FormUS({
  connection = true,
  smartphone = true,
  hours = true,
  children,
}: TermsProps) {
  const [urlParams, setUrlParams] = useState<URLSearchParams | null>(null)
  const [selectedOption, setSelectedOption] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')

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
          action="https://connectfansus.activehosted.com/proc.php"
          id="form_31"
        >
          <input type="hidden" name="u" value="31" />
          <input type="hidden" name="f" value="31" />
          <input type="hidden" name="s" />
          <input type="hidden" name="c" value="0" />
          <input type="hidden" name="m" value="0" />
          <input type="hidden" name="act" value="sub" />
          <input type="hidden" name="v" value="2" />
          <input
            type="hidden"
            name="or"
            value="adf8a2fdddb42a9fdcf2570f3eca29dd"
          />
          <S.ContentContainer>
            <S.InputContainer>
              <S.Label>Select your country</S.Label>
              <S.Select id="field[568]" name="field[568]">
                {contry
                  ?.sort((a: any, b: any) => a.name.localeCompare(b.name))
                  .map(({ id, name, value }: Option) => (
                    <option key={id} value={value}>
                      {name}
                    </option>
                  ))}
              </S.Select>
            </S.InputContainer>
            {connection ? (
              <S.InputContainer>
                <S.Label>Do you have an internet connection? </S.Label>
                {yesOrNot?.map(({ id, name }: Option) => (
                  <S.ButtonContainer key={id}>
                    <S.Button
                      id="field[569]"
                      name="field[569]"
                      type="checkbox"
                      width="12px"
                      height="12px"
                      checked={selectedOption === name}
                      onChange={() => handleOptionChange(name)}
                    />
                    <S.ButtonText>{name}</S.ButtonText>
                  </S.ButtonContainer>
                ))}
              </S.InputContainer>
            ) : null}
            {smartphone ? (
              <S.InputContainer>
                <S.Label>
                  Do you own a smartphone, tablet, computer, or notebook?
                </S.Label>
                {smartphones?.map(({ id, name }: Option) => (
                  <S.ButtonContainer key={id}>
                    <S.Button
                      type="checkbox"
                      id="field[570]"
                      name="field[570]"
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
                <S.Label>How many hours a week do you have available?</S.Label>
                <S.Button
                  id="field[571]"
                  name="field[571]"
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
                  placeholder="Type your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </S.InputContainer>
              <S.InputContainer>
                <S.Input
                  type="email"
                  name="email"
                  id="email"
                  data-name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </S.InputContainer>
              <S.InputContainer>
                <S.Input
                  type="tel"
                  name="phone"
                  id="phone"
                  data-name="phone"
                  placeholder="Type your telephone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </S.InputContainer>
            </S.FooterButtons>
            <div onClick={() => handdleSubmit()}>
              <S.SubmitButton>SUBMIT FORM</S.SubmitButton>
            </div>

            <S.Terms>
              🔒 By filling in our form, you are consenting to the collection
              and use of your information in accordance with our Terms of
              Service and <a href="/politicas-de-privacidade">Privacy Policy</a>
              .
            </S.Terms>
            <input type="hidden" name="field[98]" id="utm_campaign" value="" />
            <input type="hidden" name="field[97]" id="utm_medium" value="" />
            <input type="hidden" name="field[96]" id="utm_source" value="" />
            <input type="hidden" name="field[100]" id="utm_term" value="" />
            <input type="hidden" name="field[99]" id="utm_content" value="" />
            <input type="hidden" name="field[101]" id="gclid_field" value="" />
            <input
              type="hidden"
              name="field[102]"
              id="msclkid_field"
              value=""
            />
            <input type="hidden" name="field[104]" id="produto" value="" />
            <input type="hidden" name="field[76]" id="url" value="" />
          </S.ContentContainer>
        </S.Form>
      </div>
    </S.Container>
  )
}
