import React, { PropsWithChildren, useRef } from 'react'

// @ts-ignore
const CanvasContext = React.createContext<HTMLCanvasElement>(null)

export default function CanvasProvider({ children }: PropsWithChildren) {
  const renderingCanvas = useRef<HTMLCanvasElement>(
    (() => {
      const masterCanvas = document.createElement('canvas')
      masterCanvas.style.width = '100%'
      masterCanvas.style.height = '100%'
      masterCanvas.style.touchAction = 'none'
      masterCanvas.id = 'babylon-rendering-canvas'
      return masterCanvas
    })()
  )

  return <CanvasContext.Provider value={renderingCanvas.current}>{children}</CanvasContext.Provider>
}

export const useCanvas = () => React.useContext(CanvasContext)
