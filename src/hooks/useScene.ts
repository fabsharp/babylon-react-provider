import { useEffect, useState } from 'react'
import { Scene } from '@babylonjs/core'
import { useBabylonProvider } from '../providers/BabylonProvider'

/**
 * @category core
 * @returns
 */
export default function useScene() {
  const provider = useBabylonProvider()
  const [scene, setScene] = useState<Scene>()

  useEffect(() => {
    if (provider) {
      if (provider.isCanvasMounted) {
        setScene(provider.scene)
      } else {
        const onCanvasMounted = provider.onCanvasMounted.add(() => {
          setScene(provider.scene)
        })
        return () => {
          onCanvasMounted.remove()
        }
      }
    }
    return () => {}
  }, [provider])
  return scene
}
