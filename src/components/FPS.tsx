import React from 'react'
import { useFPS } from '../hooks'

export default function FPS() {
  const fps = useFPS()
  return <span>{fps}</span>
}
