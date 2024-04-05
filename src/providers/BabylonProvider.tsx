import { EngineOptions, SceneOptions } from '@babylonjs/core'
import React, { Children, forwardRef, ReactElement, ReactNode, useEffect, useRef } from 'react'
import BabylonCanvas from '../components/BabylonCanvas'
import CanvasProvider from './CanvasProvider'
import EngineProvider from './EngineProvider'
import SceneProvider from './SceneProvider'

export type BabylonProviderOptions = {
  engineProperties?: EngineOptions
  sceneProperties?: SceneOptions
}


export default function BabylonProvider(props: {engineOptions?: EngineOptions, sceneOptions?: SceneOptions, children: ReactNode[] | ReactNode}) {


  useEffect(() => {
    const exists = React.Children.toArray(props.children).find(element => element && element['type'] === BabylonCanvas)
    if(!exists) {
      throw new Error('<BabylonProvider> should contains one instance of <BabylonCanvas>')
    }
  }, [])

  return <div id="babylon-react-provider">
    <CanvasProvider>
      <EngineProvider engineOptions={props.engineOptions}>
        <SceneProvider sceneOptions={props.sceneOptions}>
          {props.children}
        </SceneProvider>
      </EngineProvider>
    </CanvasProvider>
     
    </div>
}