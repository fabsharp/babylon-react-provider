import { useTextures } from './useTextures'

/**
 * Get a texture by name
 * @category scene
 *
 * @param name Filter by name. Accept loose string with simple wildcard matching (ex: node1 | node* | \*de1 | no*1)
 * @returns Babylon mesh
 */
export function useTexture(name?: string) {
  const textures = useTextures(name)
  return textures.length >= 1 ? textures[0] : undefined
}
