import { AssetContainer, Scene, SceneLoader } from '@babylonjs/core'
import { useEffect, useState } from 'react'
import { useScene } from '../scene/useScene'
import { useBabylonProvider } from '../../providers'

/**
 * @category loaders
 */
export type LoadAssetContainerOptions = {
  /**
   * Called before adding all the assets from the container to the scene.
   * @param assetContainer Babylon Container with all the assets loaded
   * @param scene Current Babylon Scene to load the assets
   * @returns
   */
  beforeAddAllToScene?: (assetContainer: AssetContainer, scene: Scene) => void
  /**
   * If the current Babylon Scene must be clean before loading the assets (default false)
   */
  resetScene?: boolean
}

/**
 * @category loaders
 */
export type UseLoadAssetContainer = {
  /**
   * Babylon Container with all the assets loaded
   */
  assetContainer: undefined | AssetContainer
  /**
   * If the assets are still loading
   */
  loading: boolean
  /**
   * If progress is computable
   */
  progressComputable: undefined | boolean
  /**
   * - if progressComputable is true : progress event between 0 and 100
   * - if progressComputable is false : 0
   */
  progressPercent: number
}

/**
 * Load a babylon file to the scene.
 *
 * If you don't use babylon files you should use one of the following to benefits from tree shaking :
 * {@link useGLTF}
 * {@link useOBJ}
 * {@link useSTL}
 *
 * @param url Reactive url
 * @param options
 *
 * @category loaders
 */
export function useLoadAssetContainer(url?: string, options?: LoadAssetContainerOptions): UseLoadAssetContainer {
  const [loading, setLoading] = useState(false)
  const [assetContainer, setAssetContainer] = useState<AssetContainer>()
  const [progressComputable, setProgressComputable] = useState<boolean>()
  const [progressPercent, setProgressPercent] = useState<number>(0)
  const scene = useScene()
  const provider = useBabylonProvider()

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
          if (options?.resetScene) {
            provider?.resetScene()
          }
          if (options?.beforeAddAllToScene) {
            options.beforeAddAllToScene(container, scene)
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
