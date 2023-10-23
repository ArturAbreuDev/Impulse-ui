import S from './styles'

interface TermsProps {
  colorTitle?: string
  colorText?: string
  project?: string
  backgroundModal?: string | undefined
}

export default function TermsPageEs({
  colorTitle,
  colorText,
  project = `Grupo Impulse`,
  backgroundModal,
}: TermsProps) {
  return (
    <S.Wrapped>
      <S.ImageContainer />
      <S.Container>
        <S.Content>
          <S.ModalContainer backgroundModal={backgroundModal}>
            <S.ModalTitle colorTitle={colorTitle}>
              {`Términos de Uso`}
            </S.ModalTitle>
            <S.ModalContent>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {`1. Términos`}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`Al acceder al sitio web ${project}, usted acepta cumplir con estos términos de servicio, todas las leyes y regulaciones aplicables, y reconoce que es responsable de cumplir con todas las leyes locales aplicables. Si no está de acuerdo con alguno de estos términos, queda prohibido utilizar o acceder a este sitio. Los materiales contenidos en este sitio están protegidos por las leyes de derechos de autor y marcas comerciales aplicables.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {`2. Licencia de Uso`}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`Se otorga permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web ${project} exclusivamente para visualización transitoria personal y no comercial. Esta concesión representa una licencia y no una transferencia de título. Según esta licencia, usted no puede:`}
                  <ul>
                    <li>{` Modificar o copiar los materiales;`}</li>
                    <li>
                      {` Utilizar los materiales para cualquier propósito comercial o exhibición pública (comercial o no comercial);`}
                    </li>
                    <li>
                      {` Intentar descompilar o realizar ingeniería inversa de cualquier software contenido en el sitio web ${project};`}
                    </li>
                    <li>
                      {` Eliminar cualquier derecho de autor u otras notaciones de propiedad de los materiales;`}
                    </li>
                    <li>
                      {` Transferir los materiales a otra persona o "reflejar" los materiales en cualquier otro servidor.`}
                    </li>
                  </ul>
                  {`Esta licencia se rescindirá automáticamente si usted viola alguna de estas restricciones y puede ser revocada por ${project} en cualquier momento. Al finalizar la visualización de estos materiales o al finalizar esta licencia, usted deberá eliminar todos los materiales descargados en su posesión, ya sea en formato electrónico o impreso.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {`3. Exención de Responsabilidad`}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`Los materiales en el sitio web ${project} se proporcionan "tal cual". ${project} no ofrece garantías, expresas o implícitas, y por la presente se exime y niega todas las demás garantías, incluyendo, sin limitación, garantías implícitas o condiciones de comercialización, adecuación para un propósito particular o no violación de derechos de propiedad intelectual u otros derechos. `}
                  <p />
                  {`Además, ${project} no garantiza ni hace ninguna representación con respecto a la precisión, los resultados probables o la confiabilidad del uso de los materiales en su sitio o en relación con dichos materiales, o en los sitios vinculados a este.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {`4. Limitaciones`}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`En ningún caso ${project} o sus proveedores serán responsables de ningún daño (incluyendo, sin limitación, daños por pérdida de datos, beneficios o interrupción del negocio) que surja del uso o la imposibilidad de usar los materiales en el sitio web ${project}, incluso si ${project} o un representante autorizado de ${project} ha sido notificado oralmente o por escrito sobre la posibilidad de tales daños. Como algunas jurisdicciones no permiten la exclusión o limitación de responsabilidad por daños consecuentes o incidentales, es posible que estas limitaciones no se apliquen a usted.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {`5. Precisión de los Materiales`}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`Los materiales mostrados en el sitio web ${project} pueden contener errores técnicos, tipográficos o fotográficos. ${project} no garantiza que cualquier material en su sitio sea preciso, completo o actual. ${project} puede realizar cambios en los materiales contenidos en su sitio en cualquier momento, sin previo aviso. Sin embargo, ${project} no se compromete a actualizar los materiales.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {`6. Enlaces`}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`${project} no ha revisado todos los sitios vinculados a su sitio y no es responsable del contenido de ningún sitio vinculado. La inclusión de cualquier enlace no implica un respaldo por parte de ${project} del sitio vinculado. El uso de cualquier sitio vinculado es bajo su propio riesgo.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {`Modificaciones`}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`${project} puede revisar estos términos de servicio del sitio en cualquier momento, sin previo aviso. Al utilizar este sitio, usted acepta quedar vinculado a la versión actual de estos términos de servicio.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {`Ley Aplicable`}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de ${project} y usted se somete irrevocablemente a la jurisdicción exclusiva de los tribunales en ese estado o localidad.`}
                </S.TermsContent>
              </S.TermsContainer>
            </S.ModalContent>
          </S.ModalContainer>
        </S.Content>
      </S.Container>
    </S.Wrapped>
  )
}
