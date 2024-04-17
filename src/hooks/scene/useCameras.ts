import { useEffect, useState } from 'react'
import { Camera, Nullable, Observer } from '@babylonjs/core'
import useScene from './useScene'

/**
 *
 * @category scene
 */
export default function useCameras() {
  const scene = useScene()
  const [cameras, setCameras] = useState<Camera[]>([])
  useEffect(() => {
    if (!scene) {
      return () => {}
    }
    setCameras([...scene.cameras])

    const observers: Nullable<Observer<any>>[] = []

    observers.push(
      scene.onNewCameraAddedObservable.add(() => {
        setCameras([...scene.cameras])
      })
    )

    observers.push(
      scene.onCameraRemovedObservable.add(() => {
        setCameras([...scene.cameras])
      })
    )

    return () => {
      observers.forEach((observer) => {
        observer?.remove()
      })
      setCameras([])
    }
  }, [scene])

  return cameras
}
