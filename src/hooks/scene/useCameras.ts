import { Camera } from '@babylonjs/core'
import { useSceneNodes } from './useSceneNodes'

/**
 * Get all cameras in the scene.
 * @param names Filter by names. Accept loose string with simple wildcard matching (ex: node1 | node* | *de1 | no*1)
 * @category scene
 */
export function useCameras(names?: string) {
  return useSceneNodes<Camera>('cameras', ['onNewCameraAddedObservable', 'onCameraRemovedObservable'], names)
}
