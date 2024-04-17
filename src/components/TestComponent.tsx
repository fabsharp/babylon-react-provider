/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useScene } from '../hooks'
import '@babylonjs/loaders'
import FPS from './FPS'
import useLoadAssetContainer from '../hooks/loaders/useLoadAssetContainer'
import useMeshesTree, { MeshTree } from '../hooks/scene/useMeshesTree'
import useMesh from '../hooks/scene/useMesh'

export default function TestComponent() {
  const scene = useScene()
  const { loading, progressPercent, assetContainer } = useLoadAssetContainer(
    'https://playground.babylonjs.com/scenes/Buggy/glTF-Draco/Buggy.gltf'
    // () => {
    //   scene?.createDefaultCameraOrLight(true, true, true)
    //   scene?.createDefaultEnvironment()
    // }
  )
  const meshesTree = useMeshesTree()
  const [selected, setSelected] = useState<string>()
  const selectedMesh = useMesh(selected)

  useEffect(() => {
    if (assetContainer) {
      const [camera] = assetContainer.cameras
      scene!.activeCamera = camera
      scene!.activeCamera.attachControl()
    }
  }, [assetContainer])

  useEffect(() => {
    if (selectedMesh) {
      // eslint-disable-next-line no-console
      console.log('selected mesh', selectedMesh)
    }
  }, [selectedMesh])

  const renderTree = (tree: MeshTree) => (
    <>
      <a
        onClick={(e) => {
          e.preventDefault()
          setSelected(tree.node.name)
        }}
      >
        {tree.node.name} - ({tree.node.getClassName()})
      </a>
      <ul>
        {tree.children?.map((child) => (
          <li key={child.node.uniqueId}>{renderTree(child)}</li>
        ))}
      </ul>
    </>
  )

  return (
    <>
      {loading ? (
        `${progressPercent}%`
      ) : (
        <>
          <FPS />
          fps
        </>
      )}
      <ul>
        {meshesTree.map((tree) => (
          <li key={tree.node.uniqueId}>{renderTree(tree)}</li>
        ))}
      </ul>
    </>
  )
}
