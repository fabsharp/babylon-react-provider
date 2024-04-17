import { LoadAssetContainerOptions, useLoadAssetContainer } from './useLoadAssetContainer'
import '@babylonjs/loaders/OBJ'

/**
 * Load an OBJ files (*.obj)
 * @category loaders
 */
export function useOBJ(url?: string, options?: LoadAssetContainerOptions) {
  return useLoadAssetContainer(url, options)
}
