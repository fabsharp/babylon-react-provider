import { AbstractMesh } from '@babylonjs/core'
import { useState, useEffect } from 'react'
import { useScene } from '../providers/SceneProvider'

export default function useMeshes() {
  const scene = useScene()
  const [meshes, setMeshes] = useState<Array<AbstractMesh>>([])
  useEffect(() => {
    setMeshes([...scene.meshes])
    // scene.onDataLoadedObservable.add(() => {
    //   setMeshes([...scene.meshes])
    // })
    scene.onMeshImportedObservable.add(() => {
      setMeshes([...scene.meshes])
    })
    scene.onMeshRemovedObservable.add(() => {
      setMeshes([...scene.meshes])
    })
    scene.onNewMeshAddedObservable.add(() => {
      setMeshes([...scene.meshes])
    })
    return () => {
      setMeshes([])
    }
  }, [])
  return meshes
}
