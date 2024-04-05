import { EngineOptions, SceneOptions } from '@babylonjs/core'
import React, { PropsWithChildren, useEffect } from 'react'
import CanvasProvider from './CanvasProvider'
import EngineProvider from './EngineProvider'
import SceneProvider from './SceneProvider'
import { BabylonCanvas } from '../components'

export type BabylonProviderProps = {
  engineOptions?: EngineOptions
  sceneOptions?: SceneOptions
}

export default function BabylonProvider({
  engineOptions,
  sceneOptions,
  children,
}: PropsWithChildren<BabylonProviderProps>) {
  useEffect(() => {
    const exists = React.Children.toArray(children).find(
      (element) => element && (element as { type: any }).type === BabylonCanvas
    )
    if (!exists) {
      throw new Error('<BabylonProvider> should contains one instance of <BabylonCanvas>')
    }
  }, [])

  return (
    <div id="babylon-react-provider">
      <CanvasProvider>
        <EngineProvider engineOptions={engineOptions}>
          <SceneProvider sceneOptions={sceneOptions}>{children}</SceneProvider>
        </EngineProvider>
      </CanvasProvider>
    </div>
  )
}
