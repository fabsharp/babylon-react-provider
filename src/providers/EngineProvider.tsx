import React, { PropsWithChildren, useEffect, useRef } from 'react'
import { Engine, EngineOptions } from '@babylonjs/core'
import { useCanvas } from './CanvasProvider'

// @ts-ignore
const EngineContext = React.createContext<Engine>(null)

type EngineProviderProps = {
  antialias?: boolean
  engineOptions?: EngineOptions
}

export default function EngineProvider({ children, antialias, engineOptions }: PropsWithChildren<EngineProviderProps>) {
  const canvas = useCanvas()

  const engine = useRef<Engine>(
    (() => {
      const babylonEngine = new Engine(canvas, antialias, engineOptions)
      window.addEventListener('resize', () => {
        babylonEngine.resize()
      })
      return babylonEngine
    })()
  )

  useEffect(() => () => {
    engine.current.dispose()
  })

  return <EngineContext.Provider value={engine.current}>{children}</EngineContext.Provider>
}

export const useEngine = () => React.useContext(EngineContext)
