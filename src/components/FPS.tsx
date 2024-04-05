import React from 'react'
import useFPS from '../hooks/useFPS'

type FPSProps = {
  threshold?: number
}

export default function FPS({ threshold }: FPSProps) {
  const fps = useFPS(threshold)
  return <span>{fps}</span>
}
