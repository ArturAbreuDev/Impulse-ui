import S from './styles'

interface FooterProps {
  urlImage: string
  color?: string
  visible?: boolean
  country?: 'br' | 'eua' | 'latam'
  background?: string | undefined
}

interface CopyText {
  privacy: string
  terms: string
}

export default function Footer({
  urlImage,
  color,
  visible,
  country = 'br',
  background,
}: FooterProps) {
  const handlePrivacyClick = () => {
    window.location.href = '/politicas-de-privacidade'
  }

  const handleTermsClick = () => {
    window.location.href = '/termos-de-uso'
  }

  const copyText: Record<string, CopyText> = {
    br: {
      privacy: 'Políticas de Privacidade',
      terms: 'Termos de Uso',
    },
    eua: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
    },
    latam: {
      privacy: 'Política de privacidad',
      terms: 'Términos de uso',
    },
  }

  return (
    <S.Container background={background}>
      <S.Content>
        <S.Image src={urlImage} alt="logo-project-footer" />
        <S.RightContent color={color} visible={visible}>
          <p>GRUPO IMPULSE LTDA - CNPJ n° 37.837.482/0001-49</p>
          <p>Av Carlos Gomes, Porto Alegre - RS - Brasil</p>
          <p>© 2023 Copyright</p>
        </S.RightContent>
        <S.TermsContainer>
          <S.Termsline color={color} onClick={() => handlePrivacyClick()}>
            {copyText[country].privacy}
          </S.Termsline>
          <S.Termsline color={color} onClick={() => handleTermsClick()}>
            {copyText[country].terms}
          </S.Termsline>
        </S.TermsContainer>
      </S.Content>
    </S.Container>
  )
}
