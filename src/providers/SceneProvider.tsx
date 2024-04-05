import React, { ReactNode, useEffect, useRef } from "react";
import { Scene, SceneOptions } from "@babylonjs/core";
import { useEngine } from "./EngineProvider";

// @ts-ignore
const SceneContext = React.createContext<Scene>(null)

export default function SceneProvider(props : { children: ReactNode[] | ReactNode, sceneOptions?: SceneOptions}) {
  const engine = useEngine()

  const scene = useRef<Scene>((() => {
    const babylonScene = new Scene(engine, props.sceneOptions)
    babylonScene.createDefaultCamera(true)
    engine.runRenderLoop(() => {
      babylonScene.render()
    })
    return babylonScene
  })())

  useEffect(() => {
    return () => {
      scene.current.dispose()
    }
  })

  return <SceneContext.Provider value={scene.current}>
    {props.children}
  </SceneContext.Provider>
}

export const useScene = () => React.useContext(SceneContext)