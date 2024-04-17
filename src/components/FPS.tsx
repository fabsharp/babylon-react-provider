import React from 'react'
import useFPS from '../hooks/utils/useFPS'

export default function FPS() {
  const fps = useFPS()
  return <span>{fps}</span>
}
