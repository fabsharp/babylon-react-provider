import React, { PropsWithChildren, useEffect, useState } from 'react'
import { Engine, EngineOptions } from '@babylonjs/core'
import { useCanvas } from './CanvasProvider'

const EngineContext = React.createContext<Engine | undefined>(undefined)

type EngineProviderProps = {
  antialias?: boolean
  engineOptions?: EngineOptions
}

const createEngine = (canvas: HTMLCanvasElement, { antialias, engineOptions }: EngineProviderProps) => {
  const babylonEngine = new Engine(canvas, antialias, engineOptions)
  return babylonEngine
}

export default function EngineProvider({ children, antialias, engineOptions }: PropsWithChildren<EngineProviderProps>) {
  const canvas = useCanvas()

  const [engine, setEngine] = useState<Engine>()

  useEffect(() => {
    setEngine(createEngine(canvas, { antialias, engineOptions }))
  }, [])

  useEffect(() => {
    if (engine) {
      const handler = () => {
        engine.resize()
      }
      window.addEventListener('resize', handler)
      return () => {
        engine?.stopRenderLoop()
        window.removeEventListener('resize', handler)
      }
    }
    return () => {}
  }, [engine])

  return <EngineContext.Provider value={engine}>{children}</EngineContext.Provider>
}

export const useEngine = () => React.useContext(EngineContext)
