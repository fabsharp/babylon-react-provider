import React, { useEffect, useState } from "react"
import { List, ListItem, TextField } from "@mui/material"
import { useGLTF, useLoadAssetContainer, useMesh, useMeshes } from "babylon-react-provider"



export default function BabylonReactComponent() {
  useGLTF('https://playground.babylonjs.com/scenes/Buggy/glTF-Draco/Buggy.gltf', {
    beforeAddAllToScene(assetContainer, scene) {
      scene.createDefaultEnvironment()
      scene.activeCamera = assetContainer.cameras[0]
      scene.activeCamera.attachControl()
    },
    resetScene: true
  })

  const mesh = useMesh('node2')
  const [filter, setFilter] = useState<string>()
  const meshes = useMeshes(filter)

  return <>
    {mesh?.name}
    <TextField id="outlined-basic" variant="outlined" value={filter} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
      setFilter(event.target.value);
    }} />
    <List sx={{ overflow: 'auto', maxHeight: '360px' }}>
      {meshes.map(mesh => <ListItem key={mesh.uniqueId}>{mesh.name}</ListItem>)}
    </List>
  </>
}