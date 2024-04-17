import { LoadAssetContainerOptions, useLoadAssetContainer } from './useLoadAssetContainer'
import '@babylonjs/loaders/STL'

/**
 * Load an STL file (*.stl)
 * @category loaders
 */
export function useSTL(url?: string, options?: LoadAssetContainerOptions) {
  return useLoadAssetContainer(url, options)
}
