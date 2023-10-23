import S from './styles'

interface TermsProps {
  colorTitle?: string
  colorText?: string
  project?: string
  backgroundModal?: string | undefined
}

export default function TermsPageBr({
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
              {`Termos de uso.`}
            </S.ModalTitle>
            <S.ModalContent>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {`1. Termos`}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`Ao acessar o site do ${project}, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis, e reconhece que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site estão protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {`2. Uso de Licença`}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site ${project} exclusivamente para visualização transitória pessoal e não comercial. Essa concessão representa uma licença e não uma transferência de título. De acordo com essa licença, você não pode:`}
                  <ul>
                    <li>{` Modificar ou copiar os materiais;`}</li>
                    <li>
                      {` Utilizar os materiais para qualquer finalidade comercial ou exibição pública (comercial ou não comercial);`}
                    </li>
                    <li>
                      {` Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site do ${project};`}
                    </li>
                    <li>
                      {` Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;`}
                    </li>
                    <li>
                      {` Transferir os materiais para outra pessoa ou "espelhar" os materiais em qualquer outro servidor.`}
                    </li>
                  </ul>
                  {`Essa licença será automaticamente rescindida caso você viole alguma dessas restrições e poderá ser revogada pelo ${project} a qualquer momento. Ao encerrar a visualização desses materiais ou ao término desta licença, você deverá apagar todos os materiais baixados em sua posse, seja em formato eletrônico ou impresso.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {`3. Isenção de responsabilidade`}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`Os materiais no site ${project} são fornecidos "como estão". o ${project} não oferece garantias, expressas ou implícitas, e, por meio deste, isenta-se e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outros direitos. `}
                  <p />
                  {`Além disso, o ${project} não garante nem faz qualquer representação quanto à precisão, resultados prováveis ou confiabilidade do uso dos materiais em seu site ou relacionados a esses materiais, ou em sites vinculados a este.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {`4. Limitações`}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`Em nenhuma circunstância o ${project} ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados, lucros ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais no site ${project}, mesmo que o ${project} ou um representante autorizado do ${project} tenha sido notificado oralmente ou por escrito sobre a possibilidade de tais danos. Como algumas jurisdições não permitem a exclusão ou limitação de responsabilidade por danos consequentes ou incidentais, essas limitações podem não se aplicar a você.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {`5. Precisão dos materiais`}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`Os materiais exibidos no site ${project} podem conter erros técnicos, tipográficos ou fotográficos. o ${project} não garante que qualquer material em seu site seja preciso, completo ou atual. o ${project} pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, o ${project} não se compromete a atualizar os materiais.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {`6. Links`}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`o ${project} não revisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de qualquer site vinculado. A inclusão de qualquer link não implica endosso por parte do ${project} do site vinculado. O uso de qualquer site vinculado é por conta e risco do usuário.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {`Modificações`}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`o ${project} pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao utilizar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {`Lei aplicável`}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`Estes termos e condições são regidos e interpretados de acordo com as leis do ${project} e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.`}
                </S.TermsContent>
              </S.TermsContainer>
            </S.ModalContent>
          </S.ModalContainer>
        </S.Content>
      </S.Container>
    </S.Wrapped>
  )
}
