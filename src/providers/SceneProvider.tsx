import React, { PropsWithChildren, useEffect, useState } from 'react'
import { Engine, Scene, SceneOptions } from '@babylonjs/core'
import { useEngine } from './EngineProvider'

const SceneContext = React.createContext<Scene | undefined>(undefined)

type SceneProviderOptions = {
  sceneOptions?: SceneOptions
}

const createScene = (engine: Engine, sceneOptions?: SceneOptions) => {
  const babylonScene = new Scene(engine, sceneOptions)
  babylonScene.createDefaultCamera(true)

  engine.runRenderLoop(() => {
    babylonScene.render()
  })
  return babylonScene
}

export default function SceneProvider({ children, sceneOptions }: PropsWithChildren<SceneProviderOptions>) {
  const engine = useEngine()
  const [scene, setScene] = useState<Scene>()

  useEffect(() => {
    if (engine) {
      setScene(createScene(engine, sceneOptions))
    }
    return () => {}
  }, [engine])

  return <SceneContext.Provider value={scene}>{children}</SceneContext.Provider>
}

export const useScene = () => React.useContext(SceneContext)
