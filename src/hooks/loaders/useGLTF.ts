import useLoadAssetContainer, { LoadAssetContainerOptions } from './useLoadAssetContainer'
import '@babylonjs/loaders/glTF'

/**
 * Load a GLTF file (*.gltf, *.glb)
 * @param url Reactive url
 * @param options
 * @category loaders
 */
export default function useGLTF(url?: string, options?: LoadAssetContainerOptions) {
  return useLoadAssetContainer(url, options)
}
