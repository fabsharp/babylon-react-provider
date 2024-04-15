import { AssetContainer, Scene, SceneLoader } from '@babylonjs/core'
import { useEffect, useState } from 'react'
import useScene from './useScene'
import '@babylonjs/loaders'

export default function useGLTF(
  url?: string,
  beforeAddAllToScene?: (assetContainer: AssetContainer, scene: Scene) => void
) {
  const [loading, setLoading] = useState(false)
  const [assetContainer, setAssetContainer] = useState<AssetContainer>()
  const [progressComputable, setProgressComputable] = useState<boolean>()
  const [progressPercent, setProgressPercent] = useState<number>(0)
  const scene = useScene()

  useEffect(() => {
    if (url && scene) {
      const cancel = false
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
            beforeAddAllToScene(container, scene)
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
        },
        () => {
          console.log('hmt ?')
        }
      )

      // return () => {
      //   console.log('CANCEL')
      //   cancel = true
      // }
    }
    return () => {}
  }, [url, scene])

  return { assetContainer, loading, progressComputable, progressPercent }
}
