import S from './styles'

interface TermsProps {
  colorTitle?: string
  colorText?: string
  project?: string
  backgroundModal?: string | undefined
}

export default function PrivacyPoliciesBr({
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
              {'Política de Privacidade.'}
            </S.ModalTitle>
            <S.TermsContent colorText={colorText}>
              <p>
                {`A sua privacidade é importante para nós. É política do ${project} respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site ${project} e em outros sites que possuímos e operamos.`}
              </p>
              <p>
                {
                  'Ao utilizar este site e seus serviços associados, o usuário concorda em receber comunicações eletrônicas, tais como e-mails, notificações, mensagens e boletins informativos, enviados pelo domínio incimpulse.com. Essas comunicações podem se referir a atividades essenciais do produto de informação, como alterações de preços, atualizações do produto, novos lançamentos, promoções, atualizações de recursos e outras informações relevantes.'
                }
              </p>
              <p>
                {
                  'O usuário expressamente consente em receber essas comunicações eletrônicas, as quais são reconhecidas como parte integral da utilização dos serviços oferecidos pela plataforma. A qualquer momento, o usuário pode optar por não receber algumas dessas comunicações, seguindo as instruções de cancelamento fornecidas nas mensagens eletrônicas ou ajustando suas configurações de notificação na plataforma.'
                }
              </p>
              <p>
                {
                  'Devido à importância das informações contidas nas comunicações eletrônicas enviadas pela plataforma, a recusa em recebê-las pode ter um impacto negativo na experiência do usuário com a plataforma.'
                }
              </p>
              <p>
                {
                  'Solicitamos informações pessoais apenas quando realmente precisamos delas para fornecer um serviço. Fazemos isso de maneira justa e legal, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como essas informações serão utilizadas.'
                }
              </p>
              <p>
                {
                  'Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas, roubos, acesso não autorizado, divulgação, cópia, uso ou modificação.'
                }
              </p>
              <p>
                {
                  'Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.'
                }
              </p>
              <p>
                {
                  'O nosso site pode conter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e as práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.'
                }
              </p>
              <p>
                {
                  'Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.'
                }
              </p>
              <p>
                {
                  'O uso continuado do nosso site será considerado como aceitação das nossas práticas em relação à privacidade e às informações pessoais. Se você tiver alguma dúvida sobre como lidamos com os dados do usuário e as informações pessoais, entre em contato conosco.'
                }
              </p>
            </S.TermsContent>
            <S.ModalContent>
              <S.TermsTitle colorTitle={colorTitle}>
                {'Comunicações Eletrônicas e Notificações.'}
              </S.TermsTitle>
              <S.TermsContent colorText={colorText}>
                <p>
                  {
                    'Ao utilizar este site e os serviços associados, o usuário concorda em receber comunicações eletrônicas, incluindo, mas não se limitando a e-mails, notificações, mensagens e boletins informativos, enviados pela plataforma. Essas comunicações podem ser relacionadas a atividades essenciais da plataforma, como alterações de preços, atualizações de produtos, novos lançamentos, promoções, atualizações de recursos e outras informações relevantes.'
                  }
                </p>
                <p>
                  {
                    'O usuário consente expressamente em receber tais comunicações eletrônicas, as quais reconhece que são parte integrante da utilização dos serviços fornecidos pela plataforma, podendo, a qualquer momento, optar por não receber algumas dessas comunicações, seguindo as instruções de cancelamento de inscrição fornecidas nas mensagens eletrônicas ou ajustando suas configurações de notificações na plataforma.'
                  }
                </p>
                <p>
                  {
                    'Devido à importância das informações contidas nas comunicações eletrônicas enviadas pela plataforma, a recusa em recebê-las pode afetar negativamente experiência do usuário com a plataforma.'
                  }
                </p>
              </S.TermsContent>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {'O que são cookies?'}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {
                    'Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar a sua experiência. Esta página descreve quais informações eles coletam, como as utilizamos e por que, às vezes, precisamos armazenar esses cookies. Também compartilharemos como você pode impedir o armazenamento desses cookies, no entanto, isso pode resultar na redução da funcionalidade do site ou na impossibilidade de usar determinados recursos.'
                  }
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {'Como usamos os cookies?'}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {
                    'Utilizamos cookies por diversos motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você mantenha todos os cookies ativados se não tiver certeza se precisa ou não deles, caso sejam utilizados para fornecer um serviço que você utiliza.'
                  }
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {'Desativar cookies'}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {
                    'Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que desativar cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.'
                  }
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {'Cookies que definimos'}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  <ul>
                    <li>{'Cookies relacionados à conta:'}</li>
                    <li>
                      {
                        'Se você criar uma conta conosco, utilizaremos cookies para gerenciar o processo de inscrição e a administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em alguns casos, eles poderão permanecer para lembrar as preferências do seu site ao sair.'
                      }
                    </li>
                    <li>{'Cookies relacionados ao login:'}</li>
                    <li>
                      {
                        'Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página. Esses cookies são normalmente removidos ou limpos quando você efetua logout para garantir que você possa acessar apenas recursos e áreas restritas ao fazer login.'
                      }
                    </li>
                    <li>{'Cookies relacionados a boletins por e-mail:'}</li>
                    <li>
                      {
                        'Este site oferece serviços de assinatura de boletim informativo ou e-mail, e os cookies podem ser usados para lembrar se você já está registrado e se deve mostrar determinadas notificações válidas apenas para usuários inscritos/não inscritos.'
                      }
                    </li>
                    <li>{'Pedidos processando cookies relacionados:'}</li>
                    <li>
                      {
                        'Este site oferece facilidades de comércio eletrônico ou pagamento e alguns cookies são essenciais para garantir que seu pedido seja lembrado entre as páginas, para que possamos processá-lo adequadamente.'
                      }
                    </li>
                    <li>{'Cookies relacionados a pesquisas:'}</li>
                    <li>
                      {
                        'Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies para lembrar quem já participou de uma pesquisa ou para fornecer resultados precisos após a alteração das páginas.'
                      }
                    </li>
                    <li>{'Cookies relacionados a formulários:'}</li>
                    <li>
                      {
                        'Quando você envia dados por meio de um formulário, como os encontrados nas páginas de contato ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura.'
                      }
                    </li>
                    <li>{'Cookies de preferências do site:'}</li>
                    <li>
                      {
                        'Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências sobre como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página afetada por suas preferências.'
                      }
                    </li>
                  </ul>
                </S.TermsContent>
              </S.TermsContainer>
            </S.ModalContent>
          </S.ModalContainer>
        </S.Content>
      </S.Container>
    </S.Wrapped>
  )
}
