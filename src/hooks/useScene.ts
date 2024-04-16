import { useEffect, useState } from 'react'
import { Scene } from '@babylonjs/core'
import { useBabylonProvider } from '../providers'

/**
 * @category core
 * @returns
 */
export default function useScene() {
  const provider = useBabylonProvider()
  const [scene, setScene] = useState<Scene>()

  useEffect(() => {
    if (provider) {
      setScene(provider.scene)
    }
  }, [provider])
  return scene
}
