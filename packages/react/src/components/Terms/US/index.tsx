import S from './styles'

interface TermsProps {
  colorTitle?: string
  colorText?: string
  project?: string
  backgroundModal?: string | undefined
}

export default function TermsPageUs({
  colorTitle,
  colorText,
  project = `Impulse`,
  backgroundModal,
}: TermsProps) {
  return (
    <S.Wrapped>
      <S.ImageContainer />
      <S.Container>
        <S.Content>
          <S.ModalContainer backgroundModal={backgroundModal}>
            <S.ModalTitle colorTitle={colorTitle}>Terms of Use</S.ModalTitle>
            <S.ModalContent>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>1. Terms</S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`By accessing the ${project} website, you are agreeing to be
                  bound by these terms of service, all applicable laws and
                  regulations, and agree that you are responsible for compliance
                  with any applicable local laws. If you do not agree with any
                  of these terms, you are prohibited from using or accessing
                  this site. The materials contained in this website are
                  protected by applicable copyright and trademark law.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  2. Use License
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`Permission is granted to temporarily download one copy of the
                  materials (information or software) on the ${project} website
                  for personal, non-commercial transitory viewing only. This is
                  the grant of a license, not a transfer of title, and under
                  this license, you may not:`}
                  <ul>
                    <li>modify or copy the materials;</li>
                    <li>
                      use the materials for any commercial purpose or for any
                      public display (commercial or non-commercial);
                    </li>
                    <li>
                      {`attempt to decompile or reverse engineer any software
                      contained on the ${project} website;`}
                    </li>
                    <li>
                      remove any copyright or other proprietary notations from
                      the materials; or
                    </li>
                    <li>
                      {`transfer the materials to another person or "mirror" the
                      materials on any other server.`}
                    </li>
                  </ul>
                  {`This license shall automatically terminate if you violate any
                  of these restrictions and may be terminated by ${project} at
                  any time. Upon terminating your viewing of these materials or
                  upon the termination of this license, you must destroy any
                  downloaded materials in your possession whether in electronic
                  or printed format.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  3. Disclaimer
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`The materials on the ${project} website are provided "as is".
                  ${project} makes no warranties, expressed or implied, and
                  hereby disclaims and negates all other warranties, including
                  without limitation, implied warranties or conditions of
                  merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation
                  of rights.`}
                  <p />
                  {`Furthermore, ${project} does not warrant or make any
                  representations concerning the accuracy, likely results, or
                  reliability of the use of the materials on its website or
                  otherwise relating to such materials or on any sites linked to
                  this site.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  4. Limitations
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`In no event shall ${project} or its suppliers be liable for
                  any damages (including, without limitation, damages for loss
                  of data or profit, or due to business interruption) arising
                  out of the use or inability to use the materials on the $
                  {project}
                  website, even if ${project} or a ${project} authorized
                  representative has been notified orally or in writing of the
                  possibility of such damage. Because some jurisdictions do not
                  allow limitations on implied warranties or limitations of
                  liability for consequential or incidental damages, these
                  limitations may not apply to you.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  5. Accuracy of Materials
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`The materials appearing on the ${project} website could
                  include technical, typographical, or photographic errors. $
                  {project} does not warrant that any of the materials on its
                  website are accurate, complete, or current. ${project} may
                  make changes to the materials contained on its website at any
                  time without notice. However, ${project} does not make any
                  commitment to update the materials.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>6. Links</S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`${project} has not reviewed all of the sites linked to its
                  website and is not responsible for the contents of any such
                  linked site. The inclusion of any link does not imply
                  endorsement by ${project} of the site. Use of any such linked
                  website is at the user's own risk.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  Modifications
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`${project} may revise these terms of service for its website
                  at any time without notice. By using this website, you are
                  agreeing to be bound by the then-current version of these
                  terms of service.`}
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  Applicable Law
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {`These terms and conditions are governed by and construed in
                  accordance with the laws of ${project} and you irrevocably
                  submit to the exclusive jurisdiction of the courts in that
                  State or location.`}
                </S.TermsContent>
              </S.TermsContainer>
            </S.ModalContent>
          </S.ModalContainer>
        </S.Content>
      </S.Container>
    </S.Wrapped>
  )
}
