import React, { PropsWithChildren, useEffect, useRef } from 'react'
import { Scene, SceneOptions } from '@babylonjs/core'
import { useEngine } from './EngineProvider'

// @ts-ignore
const SceneContext = React.createContext<Scene>(null)

type SceneProviderOptions = {
  sceneOptions?: SceneOptions
}

export default function SceneProvider({ children, sceneOptions }: PropsWithChildren<SceneProviderOptions>) {
  const engine = useEngine()

  const scene = useRef<Scene>(
    (() => {
      const babylonScene = new Scene(engine, sceneOptions)
      babylonScene.createDefaultCamera(true)
      engine.runRenderLoop(() => {
        babylonScene.render()
      })
      return babylonScene
    })()
  )

  useEffect(() => () => {
    scene.current.dispose()
  })

  return <SceneContext.Provider value={scene.current}>{children}</SceneContext.Provider>
}

export const useScene = () => React.useContext(SceneContext)
