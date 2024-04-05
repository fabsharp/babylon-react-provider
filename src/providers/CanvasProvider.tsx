import React, { ReactNode, useRef } from "react"

// @ts-ignore
const CanvasContext = React.createContext<HTMLCanvasElement>(null)

export default function CanvasProvider(props : { children: ReactNode[] | ReactNode}) {
  const renderingCanvas = useRef<HTMLCanvasElement>((() => {
    const masterCanvas = document.createElement('canvas')
    masterCanvas.style.width = '100%'
    masterCanvas.style.height = '100%'
    masterCanvas.style.touchAction = 'none'
    masterCanvas.style.position = 'absolute'
    masterCanvas.id = 'babylon-rendering-canvas'
    return masterCanvas
  })())

  return <CanvasContext.Provider value={renderingCanvas.current}>
    {props.children}
  </CanvasContext.Provider>
}

export const useCanvas = () => React.useContext(CanvasContext)