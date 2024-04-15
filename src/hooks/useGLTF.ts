import { AssetContainer, SceneLoader } from '@babylonjs/core'
import { useEffect, useState } from 'react'
import useScene from './useScene'
import '@babylonjs/loaders'

export default function useGLTF(url?: string, beforeAddAllToScene?: (assetContainer: AssetContainer) => void) {
  const [loading, setLoading] = useState(false)
  const [assetContainer, setAssetContainer] = useState<AssetContainer>()
  const [progressComputable, setProgressComputable] = useState<boolean>()
  const [progressPercent, setProgressPercent] = useState<number>(0)
  const scene = useScene()

  useEffect(() => {
    if (url && scene) {
      let cancel = false
      setLoading(true)
      if (scene.isDisposed) {
        return () => {}
      }
      SceneLoader.LoadAssetContainer(
        url,
        undefined,
        scene,
        (container: AssetContainer) => {
          if (cancel) {
            return
          }
          if (beforeAddAllToScene) {
            beforeAddAllToScene(container)
          }
          container.addAllToScene()
          setLoading(false)
          setAssetContainer(container)
        },
        (event) => {
          setProgressComputable(event.lengthComputable)
          if (event.lengthComputable) {
            setProgressPercent(Math.round((event.loaded * 100) / event.total))
          }
        }
      )

      return () => {
        cancel = true
      }
    }
    return () => {}
  }, [url, scene])

  return { assetContainer, loading, progressComputable, progressPercent }
}
