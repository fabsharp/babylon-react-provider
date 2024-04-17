import { useLights } from './useLights'

/**
 * Get a light by name
 * @category scene
 *
 * @param name Filter by name. Accept loose string with simple wildcard matching (ex: node1 | node* | \*de1 | no*1)
 * @returns Babylon mesh
 */
export function useLight(name?: string) {
  const lights = useLights(name)
  return lights.length >= 1 ? lights[0] : undefined
}
