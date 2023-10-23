import S from './styles'

interface TermsProps {
  colorTitle?: string
  colorText?: string
  project?: string
  backgroundModal?: string | undefined
}

export default function PrivacyPoliciesUs({
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
              {'Privacy Policy'}
            </S.ModalTitle>
            <S.TermsContent colorText={colorText}>
              <p>
                {`Your privacy is important to us. It is the policy of ${project} to respect your privacy regarding any information we may collect from you on the ${project} website and other websites we own and operate.`}
              </p>
              <p>
                {`By using this website and its associated services, the user agrees to receive electronic communications, including, but not limited to, emails, notifications, messages, and newsletters, sent by the ${project}.com domain. These communications may relate to essential activities of the information product, such as price changes, product updates, new releases, promotions, feature updates, and other relevant information.`}
              </p>

              <p>
                {
                  'The user expressly consents to receive such electronic communications, which they recognize as an integral part of utilizing the services provided by the platform. At any time, the user may choose not to receive some of these communications by following the unsubscribe instructions provided in the electronic messages or by adjusting their notification settings on the platform.'
                }
              </p>

              <p>
                {
                  'Due to the importance of the information contained in the electronic communications sent by the platform, the refusal to receive them may adversely affect the user’s experience with the platform.'
                }
              </p>
              <p>
                {
                  'We only ask for personal information when we truly need it to provide you with a service. We do this by fair and lawful means, with your knowledge and consent. We also inform you why we collect it and how it will be used.'
                }
              </p>
              <p>
                {
                  'We only retain collected information for as long as necessary to provide the requested service. When we store data, we protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.'
                }
              </p>
              <p>
                {
                  'We do not share personally identifiable information publicly or with third parties, except as required by law.'
                }
              </p>
              <p>
                {
                  'Our website may contain links to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites and cannot accept responsibility for their respective privacy policies.'
                }
              </p>
              <p>
                {
                  'You are free to refuse our request for personal information, understanding that we may not be able to provide you with some of the services you desire.'
                }
              </p>
              <p>
                {
                  'Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.'
                }
              </p>
            </S.TermsContent>
            <S.ModalContent>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {'What Are Cookies?'}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {
                    'As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored, however, this may downgrade or "break" certain elements of the site functionality.'
                  }
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {'How We Use Cookies'}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {
                    'We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not, in case they are used to provide a service that you use.'
                  }
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {'Disabling Cookies'}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {
                    'You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in disabling certain functionality and features of this site. Therefore, it is recommended that you do not disable cookies.'
                  }
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {'The Cookies We Set'}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  <ul>
                    <li>{'Account-related cookies:'}</li>
                    <li>
                      {
                        'If you create an account with us, we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out; however, in some cases, they may remain afterward to remember your site preferences when logged out.'
                      }
                    </li>
                    <li>{'Login-related cookies:'}</li>
                    <li>
                      {
                        'We use cookies when you are logged in so that we can remember that action. This prevents you from having to log in every time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.'
                      }
                    </li>
                    <li>{'Email newsletter-related cookies:'}</li>
                    <li>
                      {
                        'This site offers newsletter or email subscription services, and cookies may be used to remember if you are already registered and whether to show certain notifications valid only to subscribed/unsubscribed users.'
                      }
                    </li>
                    <li>{'Order processing-related cookies:'}</li>
                    <li>
                      {
                        'This site offers e-commerce or payment facilities, and some cookies are essential to ensure that your order is remembered between pages so that we can process it correctly.'
                      }
                    </li>
                    <li>{'Survey-related cookies:'}</li>
                    <li>
                      {
                        'From time to time, we offer user surveys and questionnaires to provide you with interesting insights, helpful tools, or to understand our user base more accurately. These surveys may use cookies to remember who has already taken part in a survey or to provide accurate results after you change pages.'
                      }
                    </li>
                    <li>{'Form-related cookies:'}</li>
                    <li>
                      {
                        'When you submit data through a form such as those found on contact pages or comment forms, cookies may be set to remember your user details for future correspondence.'
                      }
                    </li>
                    <li>{'Site preferences cookies:'}</li>
                    <li>
                      {
                        'To provide you with a great experience on this site, we provide the functionality to set your preferences.'
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
