import { useCameras } from './useCameras'

/**
 * Get a camera by name
 * @category scene
 * @param name Filter by name. Accept loose string with simple wildcard matching (ex: node1 | node* | \*de1 | no*1)
 */
export function useCamera(name?: string) {
  const cameras = useCameras(name)

  return cameras.length >= 1 ? cameras[0] : undefined
}
