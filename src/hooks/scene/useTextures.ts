import { Texture } from '@babylonjs/core'
import { useSceneNodes } from './useSceneNodes'

/**
 * Get all textures in the scene.
 * @category scene
 * @param names Filter by names. Accept loose string with simple wildcard matching (ex: node1 | node* | \*de1 | no*1)
 */
export function useTextures(names?: string) {
  return useSceneNodes<Texture>('textures', ['onTextureRemovedObservable', 'onNewTextureAddedObservable'], names)
}
