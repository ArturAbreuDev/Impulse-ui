declare global {
  interface Window {
    smartplayer: any
  }
}

export class Vturb {
  static script: HTMLScriptElement
  static mount = (vslId: string | undefined) => {
    this.script = document.createElement('script')
    this.script.src = `https://scripts.converteai.net/817bd58d-9ef6-4339-97a6-a374233fe748/players/${vslId}/player.js`
    this.script.async = true
    this.script.type = 'text/javascript'
    this.script.id = 'smartplayer-script-head'

    setTimeout(() => {
      document.head.appendChild(this.script)
    }, 1)
  }

  static verifyScriptIsLoaded = () => {
    return document.getElementById('smartplayer-script-head')
  }

  static unmount = () => {
    if (this.script && this.verifyScriptIsLoaded())
      document.head.removeChild(this.script)
  }

  static videoDelay = (onShow: any) => {
    /* ALTERE O VALOR 10 PARA OS SEGUNDOS EM QUE AS SEÇÕES VÃO APARECER */
    const SECONDS_TO_DISPLAY = 740

    /* DAQUI PARA BAIXO NAO PRECISA ALTERAR */
    let attempts = 0
    let elsDisplayed = false
    const alreadyDisplayedKey = `alreadyElsDisplayed${SECONDS_TO_DISPLAY}`
    const alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey)
    const showHiddenElements = function () {
      if (onShow) onShow(true)
      elsDisplayed = true
      localStorage.setItem(alreadyDisplayedKey, 'true')
    }
    const startWatchVideoProgress = function () {
      if (
        typeof window.smartplayer === 'undefined' ||
        !(window.smartplayer.instances && window.smartplayer.instances.length)
      ) {
        if (attempts >= 10) return
        attempts += 1
        return setTimeout(function () {
          startWatchVideoProgress()
        }, 1000)
      }
      window.smartplayer.instances[0].on('timeupdate', () => {
        if (elsDisplayed || window.smartplayer.instances[0].smartAutoPlay)
          return
        if (
          SECONDS_TO_DISPLAY < window.smartplayer.instances[0].video.currentTime
        )
          return
        showHiddenElements()
      })
    }
    if (alreadyElsDisplayed === 'true') {
      setTimeout(function () {
        showHiddenElements()
      }, 100)
    } else {
      startWatchVideoProgress()
    }
  }
}
