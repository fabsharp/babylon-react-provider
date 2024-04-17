import { LoadAssetContainerOptions, useLoadAssetContainer } from './useLoadAssetContainer'
import '@babylonjs/loaders/glTF'

/**
 * Load a GLTF file (*.gltf, *.glb)
 * @param url Reactive url
 * @param options
 * @category loaders
 */
export function useGLTF(url?: string, options?: LoadAssetContainerOptions) {
  return useLoadAssetContainer(url, options)
}
