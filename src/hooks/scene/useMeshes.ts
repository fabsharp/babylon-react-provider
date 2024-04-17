import { AbstractMesh } from '@babylonjs/core'
import { useSceneNodes } from './useSceneNodes'

/**
 * Get all meshes in the scene.
 * @category scene
 * @param names Filter by names. Accept loose string with simple wildcard matching (ex: node1 | node* | \*de1 | no*1)
 */
export function useMeshes(names?: string) {
  return useSceneNodes<AbstractMesh>(
    'meshes',
    ['onMeshImportedObservable', 'onMeshRemovedObservable', 'onNewMeshAddedObservable'],
    names
  )
}
