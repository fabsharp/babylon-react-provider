import React from 'react'
import { useScene, useGLTF } from 'babylon-react-provider'
import { AssetContainer } from '@babylonjs/core'

export default function LoadGLB() {
  const scene = useScene()
  useGLTF('https://playground.babylonjs.com/scenes/Buggy/glTF-Draco/Buggy.gltf', (container: AssetContainer) => {
    scene.createDefaultCameraOrLight(true, true, true)
    scene.createDefaultEnvironment()
    const [camera] = container.cameras
    scene.activeCamera = camera
    scene.activeCamera.attachControl()
    scene.getEngine().resize()
  })

  return <span>Oui</span>
}
