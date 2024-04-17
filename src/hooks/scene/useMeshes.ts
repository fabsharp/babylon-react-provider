import { AbstractMesh, Nullable, Observer } from '@babylonjs/core'
import { useState, useEffect } from 'react'
import useScene from './useScene'

/**
 * @category scene
 * @returns
 */
export default function useMeshes() {
  const scene = useScene()
  const [meshes, setMeshes] = useState<Array<AbstractMesh>>([])
  useEffect(() => {
    if (!scene) {
      return () => {}
    }
    setMeshes([...scene.meshes])

    const observers: Nullable<Observer<any>>[] = []
    observers.push(
      scene.onMeshImportedObservable.add(() => {
        setMeshes([...scene.meshes])
      })
    )
    observers.push(
      scene.onMeshRemovedObservable.add(() => {
        setMeshes([...scene.meshes])
      })
    )
    observers.push(
      scene.onNewMeshAddedObservable.add(() => {
        setMeshes([...scene.meshes])
      })
    )

    return () => {
      observers.forEach((observer) => {
        observer?.remove()
      })
      setMeshes([])
    }
  }, [scene])
  return meshes
}
