import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Vturb } from './data'
import S from './styles'

interface TyComponentProps {
  checkoutLink?: string
  FirstName?: string
  vslId?: string
  vslIdEmail?: string
  isVisible?: boolean
  timeVsl?: number
  urlImage?: string
  Subtitle?: string
  Price?: string
  SubtitleTwo?: string
  TextButton?: string
  Title?: string
  TitleTwo?: string
  ColorTitle?: string
  ColorPrice?: string

  setIsVisible: (isVisible: boolean) => void
}

export default function TyComponent(props: TyComponentProps) {
  const {
    checkoutLink,
    FirstName,
    vslId = 'defaultVslId',
    vslIdEmail = 'defaultVslIdEmail',
    isVisible,
    timeVsl = 100,
    urlImage,
    setIsVisible,
    Subtitle = 'Start earning ',
    Price = '$18 – $39',
    SubtitleTwo = ' an hour doing jobs as a Envelope Stuffing Professional today!',
    TextButton = 'I want to work as an Envelope Stuffing Professional',
    Title = 'Congratulations, ',
    TitleTwo = 'YOU HAVE BEEN APPROVED!',
    ColorTitle = '',
    ColorPrice = '',
  } = props

  const [currentTime, setCurrentTime] = useState<number | undefined>(undefined)
  const [time, setTime] = useState(new Date())

  const dynamicVslIdRef = useRef<any | undefined>(undefined)

  useEffect(() => {
    console.log(window?.location.pathname)
    const currentPathname = window.location.pathname
    dynamicVslIdRef.current = currentPathname === '/pv' ? vslId : vslIdEmail

    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [vslId, vslIdEmail])

  useEffect(() => {
    if (currentTime !== undefined && currentTime > timeVsl) {
      setIsVisible(true)
    }
  }, [currentTime, timeVsl, setIsVisible])

  useEffect(() => {
    const timeVideo = localStorage.getItem(dynamicVslIdRef.current)
    if (timeVideo !== null) {
      setCurrentTime(+timeVideo)
    }
  }, [time, dynamicVslIdRef.current])

  const onVideoShow = useCallback(() => {
    Vturb.videoDelay(dynamicVslIdRef.current)
  }, [dynamicVslIdRef.current])

  useEffect(() => {
    Vturb.mount(dynamicVslIdRef.current)
    window.addEventListener('load', onVideoShow)

    return () => {
      Vturb.unmount()
      window.removeEventListener('load', onVideoShow)
    }
  }, [dynamicVslIdRef.current, onVideoShow])

  return (
    <S.Container isVisible={isVisible}>
      <img src={urlImage} alt="Logo" />

      <S.ModalContainer>
        <S.LeftContent>
          <>
            <div className="content">
              <div id={`vid_${dynamicVslIdRef.current}`}>
                <img
                  id={`thumb_${dynamicVslIdRef.current}`}
                  src={`https://images.converteai.net/817bd58d-9ef6-4339-97a6-a374233fe748/players/${dynamicVslIdRef.current}/thumbnail.jpg`}
                  alt="VSL icon"
                />
              </div>
            </div>
          </>
        </S.LeftContent>
        <S.RightContent>
          <S.Name ColorTitle={ColorTitle}>
            {Title}
            <br /> <small>{FirstName}</small>! <br />
            {TitleTwo}
          </S.Name>

          <S.Text ColorPrice={ColorPrice}>
            {Subtitle}
            <small>{Price}</small>
            {SubtitleTwo}
          </S.Text>
        </S.RightContent>
      </S.ModalContainer>
      {isVisible && <S.Button href={checkoutLink}> {TextButton}</S.Button>}
    </S.Container>
  )
}
