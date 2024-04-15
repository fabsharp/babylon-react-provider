import React from 'react'
import { ProviderInstance, useGLTF } from 'babylon-react-provider'
import { AssetContainer, Scene } from '@babylonjs/core'
import { Button } from '@mui/material'

export default function LoadGLB() {
  useGLTF(
    'https://playground.babylonjs.com/scenes/Buggy/glTF-Draco/Buggy.gltf',
    (container: AssetContainer, scene: Scene) => {
      scene.createDefaultCameraOrLight(true, true, true)
      scene.createDefaultEnvironment()
      const [camera] = container.cameras
      // eslint-disable-next-line no-param-reassign
      scene.activeCamera = camera
      scene.activeCamera.attachControl()
      scene.getEngine().resize()
    }
  )

  return <Button onClick={() => ProviderInstance.checkInstances()}>check Instances</Button>
}
