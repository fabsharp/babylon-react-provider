import { useMeshes } from 'babylon-react-provider'
import React from 'react'

export default function Meshes() {
  const meshes = useMeshes()
  return (
    <ul>
      {meshes.map((mesh) => (
        <li key={mesh.uniqueId}>{mesh.name}</li>
      ))}
    </ul>
  )
}
