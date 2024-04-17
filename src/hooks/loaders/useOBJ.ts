import useLoadAssetContainer, { LoadAssetContainerOptions } from './useLoadAssetContainer'
import '@babylonjs/loaders/OBJ'

/**
 * Load an OBJ files (*.obj)
 * @category loaders
 */
export default function useOBJ(url?: string, options?: LoadAssetContainerOptions) {
  return useLoadAssetContainer(url, options)
}
