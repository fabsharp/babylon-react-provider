import useLoadAssetContainer, { LoadAssetContainerOptions } from './useLoadAssetContainer'
import '@babylonjs/loaders/STL'

/**
 * Load an STL file (*.stl)
 * @category loaders
 */
export default function useSTL(url?: string, options?: LoadAssetContainerOptions) {
  return useLoadAssetContainer(url, options)
}
