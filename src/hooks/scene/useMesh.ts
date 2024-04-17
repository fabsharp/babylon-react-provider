import { useMeshes } from './useMeshes'

/**
 * Get a mesh by name
 * @category scene
 *
 * @param name Filter by name. Accept loose string with simple wildcard matching (ex: node1 | node* | \*de1 | no*1)
 * @returns Babylon mesh
 */
export function useMesh(name?: string) {
  const meshes = useMeshes(name)
  return meshes.length >= 1 ? meshes[0] : undefined
}
