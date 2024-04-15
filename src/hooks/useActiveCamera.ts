import { useEffect, useState } from 'react'
import { Camera, Nullable } from '@babylonjs/core'
import useScene from './useScene'

export default function useActiveCamera() {
  const scene = useScene()
  const [activeCamera, setActiveCamera] = useState<Nullable<Camera>>()
  useEffect(() => {
    if (!scene) {
      return () => {}
    }

    setActiveCamera(scene.activeCamera)

    const observer = scene.onActiveCameraChanged.add(() => {
      setActiveCamera(scene.activeCamera)
    })
    return () => {
      observer.remove()
    }
  }, [scene])

  return activeCamera
}
