import S from './styles'

interface TermsProps {
  colorTitle?: string
  colorText?: string
  project?: string
  backgroundModal?: string | undefined
}

export default function PrivacyPoliciesEs({
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
            <S.ModalTitle colorTitle={colorTitle}>
              {'Política de Privacidad'}
            </S.ModalTitle>
            <S.TermsContent colorText={colorText}>
              <p>
                {`Su privacidad es importante para nosotros. En ${project} respetamos su privacidad con respecto a cualquier información que podamos recopilar en el sitio web de ${project} y en otros sitios que poseemos y operamos.`}
              </p>
              <p>
                {
                  'Solicitamos información personal solo cuando realmente la necesitamos para brindar un servicio. Lo hacemos de manera justa y legal, con su conocimiento y consentimiento. También le informamos por qué estamos recopilando esta información y cómo se utilizará.'
                }
              </p>
              <p>
                {
                  'Solo conservamos la información recopilada durante el tiempo necesario para proporcionar el servicio solicitado. Almacenamos los datos de forma segura utilizando medios comercialmente aceptables para evitar pérdidas, robos, acceso no autorizado, divulgación, copia, uso o modificación.'
                }
              </p>
              <p>
                {
                  'No compartimos públicamente ni con terceros información de identificación personal, excepto cuando lo exija la ley.'
                }
              </p>
              <p>
                {
                  'Nuestro sitio web puede contener enlaces a sitios externos que no son operados por nosotros. Tenga en cuenta que no tenemos control sobre el contenido y las prácticas de estos sitios, por lo que no podemos aceptar responsabilidad por sus respectivas políticas de privacidad.'
                }
              </p>
              <p>
                {
                  'Usted es libre de rechazar nuestra solicitud de información personal, pero tenga en cuenta que es posible que no podamos proporcionar algunos de los servicios deseados.'
                }
              </p>
              <p>
                {
                  'El uso continuado de nuestro sitio web se considerará como aceptación de nuestras prácticas de privacidad y manejo de información personal. Si tiene alguna pregunta sobre cómo manejamos los datos del usuario y la información personal, comuníquese con nosotros.'
                }
              </p>
            </S.TermsContent>
            <S.ModalContent>
              <S.TermsTitle colorTitle={colorTitle}>
                {'Comunicaciones Electrónicas y Notificaciones'}
              </S.TermsTitle>
              <S.TermsContent colorText={colorText}>
                <p>
                  {
                    'Al utilizar este sitio web y los servicios asociados, el usuario acepta recibir comunicaciones electrónicas, incluyendo, pero no limitándose a correos electrónicos, notificaciones, mensajes y boletines informativos enviados por la plataforma. Estas comunicaciones pueden estar relacionadas con actividades esenciales de la plataforma, como cambios en los precios, actualizaciones de productos, nuevos lanzamientos, promociones, actualizaciones de características y otra información relevante.'
                  }
                </p>
                <p>
                  {
                    'El usuario consiente expresamente en recibir dichas comunicaciones electrónicas, reconociendo que son parte integral de la utilización de los servicios proporcionados por la plataforma. En cualquier momento, el usuario puede optar por no recibir algunas de estas comunicaciones siguiendo las instrucciones de cancelación de suscripción proporcionadas en los mensajes electrónicos o ajustando sus configuraciones de notificaciones en la plataforma.'
                  }
                </p>
                <p>
                  {
                    'Dada la importancia de la información contenida en las comunicaciones electrónicas enviadas por la plataforma, la negativa a recibirlas puede afectar negativamente la experiencia del usuario con la plataforma.'
                  }
                </p>
              </S.TermsContent>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {'¿Qué son las cookies?'}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {
                    'Como es común en casi todos los sitios web profesionales, este sitio utiliza cookies, que son pequeños archivos descargados en su computadora, para mejorar su experiencia. Esta página describe qué información recopilan, cómo se utiliza y por qué a veces es necesario almacenar estas cookies. También compartiremos cómo puede evitar el almacenamiento de estas cookies, pero esto puede afectar la funcionalidad del sitio o impedir el uso de ciertas características.'
                  }
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {'¿Cómo usamos las cookies?'}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {
                    'Utilizamos cookies por diversas razones, detalladas a continuación. Desafortunadamente, en la mayoría de los casos no hay opciones estándar de la industria para deshabilitar las cookies sin desactivar completamente la funcionalidad y las características que agregan a este sitio. Se recomienda que mantenga todas las cookies habilitadas si no está seguro de si las necesita o no, en caso de que se utilicen para proporcionar un servicio que utiliza.'
                  }
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {'Desactivación de cookies'}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  {
                    'Puede evitar la configuración de cookies ajustando la configuración de su navegador (consulte la ayuda del navegador para saber cómo hacerlo). Tenga en cuenta que deshabilitar las cookies afectará la funcionalidad de este y muchos otros sitios web que visite. La desactivación de las cookies generalmente resultará en la desactivación de ciertas funciones y características de este sitio. Por lo tanto, se recomienda que no deshabilite las cookies.'
                  }
                </S.TermsContent>
              </S.TermsContainer>
              <S.TermsContainer>
                <S.TermsTitle colorTitle={colorTitle}>
                  {'Cookies que establecemos'}
                </S.TermsTitle>
                <S.TermsContent colorText={colorText}>
                  <ul>
                    <li>{'Cookies relacionadas con la cuenta:'}</li>
                    <li>
                      {
                        'Si crea una cuenta con nosotros, utilizaremos cookies para gestionar el proceso de registro y la administración general. Estas cookies se eliminarán generalmente cuando cierre sesión en el sistema, pero en algunos casos pueden permanecer para recordar las preferencias de su sitio al cerrar sesión.'
                      }
                    </li>
                    <li>{'Cookies relacionadas con el inicio de sesión:'}</li>
                    <li>
                      {
                        'Utilizamos cookies cuando inicia sesión para recordar esta acción. Esto evita que tenga que iniciar sesión cada vez que visita una nueva página. Estas cookies se eliminan o borran normalmente cuando cierra sesión para asegurar que solo pueda acceder a funciones y áreas restringidas cuando inicie sesión.'
                      }
                    </li>
                    <li>
                      {
                        'Cookies relacionadas con boletines por correo electrónico:'
                      }
                    </li>
                    <li>
                      {
                        'Este sitio ofrece servicios de suscripción a boletines o correo electrónico, y las cookies pueden utilizarse para recordar si ya está registrado y si se deben mostrar ciertas notificaciones válidas solo para usuarios suscritos/no suscritos.'
                      }
                    </li>
                    <li>
                      {'Cookies relacionadas con el procesamiento de pedidos:'}
                    </li>
                    <li>
                      {
                        'Este sitio ofrece facilidades de comercio electrónico o pago, y algunas cookies son esenciales para asegurar que su pedido se recuerde entre las páginas para que podamos procesarlo correctamente.'
                      }
                    </li>
                    <li>{'Cookies relacionadas con Evaluador:'}</li>
                    <li>
                      {
                        'De forma periódica, ofrecemos Evaluador y cuestionarios para proporcionar información interesante, herramientas útiles o para comprender mejor nuestra base de usuarios. Estas Evaluador pueden utilizar cookies para recordar quién ha participado en una encuesta o para proporcionar resultados precisos después de cambiar las páginas.'
                      }
                    </li>
                    <li>{'Cookies relacionadas con formularios:'}</li>
                    <li>
                      {
                        'Cuando envía datos a través de un formulario, como los que se encuentran en las páginas de contacto o en los formularios de comentarios, se pueden configurar cookies para recordar los detalles del usuario para correspondencia futura.'
                      }
                    </li>
                    <li>{'Cookies de preferencias del sitio:'}</li>
                    <li>
                      {
                        'Para proporcionar una excelente experiencia en este sitio, ofrecemos la funcionalidad de establecer sus preferencias sobre cómo se ejecuta este sitio cuando lo utiliza. Para recordar sus preferencias, debemos establecer cookies para que esta información se pueda llamar cada vez que interactúe con una página afectada por sus preferencias.'
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
