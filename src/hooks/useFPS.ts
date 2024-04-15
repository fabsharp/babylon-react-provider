import { useEffect, useState } from 'react'
import useScene from './useScene'

export default function useFPS(threshold?: number) {
  const scene = useScene()
  const [fps, setFps] = useState(() => scene?.getEngine().getFps() || 0)

  useEffect(() => {
    const observer = scene?.onAfterRenderObservable.add(() => {
      const newFPS = Math.round(scene.getEngine().getFps())
      if (!threshold || Math.abs(newFPS - fps) > threshold) {
        setFps(newFPS)
      }
    })
    return () => {
      observer?.remove()
    }
  }, [scene])

  return fps
}
