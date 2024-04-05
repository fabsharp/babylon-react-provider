import React, { ReactNode, useEffect, useRef } from "react";
import { Engine, EngineOptions } from "@babylonjs/core";
import { useCanvas } from "./CanvasProvider";

// @ts-ignore
const EngineContext = React.createContext<Engine>(null)

export default function EngineProvider(props : { children: ReactNode[] | ReactNode, antialias?: boolean, engineOptions?: EngineOptions}) {
  const canvas = useCanvas()

  const engine = useRef<Engine>((() => {
    const babylonEngine = new Engine(canvas, props.antialias, props.engineOptions)
    window.addEventListener('resize', () => {
      babylonEngine.resize()
    })
    return babylonEngine
  })())

  useEffect(() => {
    return () => {
      engine.current.dispose()
    }
  })

  return <EngineContext.Provider value={engine.current}>
    {props.children}
  </EngineContext.Provider>
}

export const useEngine = () => React.useContext(EngineContext)