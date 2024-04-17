import { useEffect, useState } from 'react'
import { Observer, Scene, Nullable } from '@babylonjs/core'
import { useBabylonProvider } from '../../providers/BabylonProvider'

/**
 * @category scene
 */
export default function useScene() {
  const provider = useBabylonProvider()
  const [scene, setScene] = useState<Scene>()

  useEffect(() => {
    if (provider) {
      const observers: Nullable<Observer<any>>[] = []
      if (provider.isCanvasMounted) {
        setScene(provider.scene)
      } else {
        observers.push(
          provider.onCanvasMounted.add(() => {
            setScene(provider.scene)
          })
        )
      }
      observers.push(
        provider.onSceneReset.add(() => {
          setScene(provider.scene)
        })
      )
      return () => {
        observers.forEach((observer) => observer?.remove())
      }
    }
    return () => {}
  }, [provider])
  return scene
}
