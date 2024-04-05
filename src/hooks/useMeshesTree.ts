import { useEffect, useState } from "react";
import { useMeshes } from "./useMeshes";
import { AbstractMesh, TransformNode, Node } from "@babylonjs/core";

export type MeshTree = {
  node: TransformNode | AbstractMesh
  children?: MeshTree[]
}

const getHierarchy = (node: TransformNode | AbstractMesh | Node) => {
  if(node instanceof TransformNode || node instanceof AbstractMesh) {
    return {
      node,
      children: node.getChildren(undefined, true).map(child => getHierarchy(child))
    }
  }
  else {
    return {
      node,
      children: []
    }
  }
}

export default function useMeshesTree() {
  const meshes = useMeshes()
  const [tree, setTree] = useState<MeshTree[]>([])
  useEffect(() => {
    const roots = meshes.filter(mesh => !mesh.parent)
    const hierarchy: MeshTree[] = []
    roots.forEach(root => {
      hierarchy.push(getHierarchy(root))
    })
    setTree(hierarchy)
  }, [meshes])
  
  return tree
}