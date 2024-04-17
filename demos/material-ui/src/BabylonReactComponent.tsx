import React from "react"
import { List, ListItem } from "@mui/material"
import { useGLTF, useMeshes } from "babylon-react-provider"

export default function BabylonReactComponent() {
  useGLTF('https://playground.babylonjs.com/scenes/Buggy/glTF-Draco/Buggy.gltf', (container, scene) => {
    scene.createDefaultEnvironment()
    scene.activeCamera = container.cameras[0]
    scene.activeCamera.attachControl()
  })

  const meshes = useMeshes()

  return <List sx={{ overflow: 'auto', maxHeight: '360px' }}>
    {meshes.map(mesh => <ListItem key={mesh.uniqueId}>{mesh.name}</ListItem>)}
  </List>
}