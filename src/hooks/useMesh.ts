import { useEffect, useState } from "react";
import { useMeshes } from "./useMeshes";
import { AbstractMesh } from "@babylonjs/core";


export default function useMesh(name?: string) {
  const meshes = useMeshes()
  const [mesh, setMesh] = useState<AbstractMesh>()
  useEffect(() => {
    setMesh(meshes.find(mesh => mesh.name === name))
  }, [meshes, name])

  console.log("test")
  return mesh
}