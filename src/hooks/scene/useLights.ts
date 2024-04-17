import { Light } from '@babylonjs/core'
import { useSceneNodes } from './useSceneNodes'

/**
 * Get all lights in the scene
 * @param names Filter by names. Accept loose string with simple wildcard matching (ex: node1 | node* | *de1 | no*1)
 * @category scene
 */
export function useLights(names?: string) {
  return useSceneNodes<Light>('lights', ['onNewLightAddedObservable', 'onLightRemovedObservable'], names)
}
