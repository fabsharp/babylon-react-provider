import React, { useEffect, useState } from "react";
import { useScene } from "../providers/SceneProvider";
import '@babylonjs/loaders'
import FPS from "./FPS";
import useGLTF from "../hooks/useGLTF";
import { useMeshes } from "../hooks/useMeshes";
import useMeshesTree, { MeshTree } from "../hooks/useMeshesTree";
import useMesh from "../hooks/useMesh";

export default function TestComponent() {
  const scene = useScene()
  const { loading, progressPercent, assetContainer } = useGLTF('https://playground.babylonjs.com/scenes/Buggy/glTF-Draco/Buggy.gltf', () => {
    scene.createDefaultCameraOrLight(true, true, true);
    scene.createDefaultEnvironment();
  })
  const meshesTree = useMeshesTree()
  const [selected, setSelected] = useState<string>()
  const selectedMesh = useMesh(selected)

  useEffect(() => {
    if(assetContainer) {
      scene.activeCamera = assetContainer.cameras[0]
      scene.activeCamera.attachControl()
      console.log(assetContainer)
    }
  }, [assetContainer])

  useEffect(() => {
    if(selectedMesh) {
      console.log("selected mesh", selectedMesh)
    }
  }, [selectedMesh])

  

  const renderTree = (tree: MeshTree) => {
    return <>
      <a href='#'  onClick={(e) => { e.preventDefault(); setSelected(tree.node.name)}}>{ tree.node.name } - ({ tree.node.getClassName()})</a>
      <ul>
        { tree.children?.map(child => <li key={child.node.uniqueId}>{renderTree(child)}</li>)} 
      </ul> 
    </>
  }

  return <>{loading ? progressPercent + '%': <><FPS threshold={2}></FPS>fps</>} 
  <ul>
  {
    meshesTree.map(tree => <li key={tree.node.uniqueId}>{ renderTree(tree) }</li>)
  }
  </ul>
  </>
}