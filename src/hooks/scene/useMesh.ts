import { useEffect, useState } from 'react'
import { AbstractMesh } from '@babylonjs/core'
import useMeshes from './useMeshes'

/**
 * Get a mesh by name
 * @category scene
 *
 * @param name A reactive string
 * @returns Babylon mesh
 */
export default function useMesh(name?: string) {
  const meshes = useMeshes()
  const [mesh, setMesh] = useState<AbstractMesh>()
  useEffect(() => {
    setMesh(meshes.find((item) => item.name === name))
  }, [meshes, name])
  return mesh
}
