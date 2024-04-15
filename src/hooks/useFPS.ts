import { useEffect, useState } from 'react'
import useScene from './useScene'

export default function useFPS() {
  const scene = useScene()
  const [fps, setFps] = useState(() => scene?.getEngine().getFps() || 0)

  useEffect(() => {
    const observer = scene?.onAfterRenderObservable.add(() => {
      const newFPS = Math.round(scene.getEngine().getFps())
      if (Math.abs(newFPS - fps) > 1) {
        setFps(newFPS)
      }
    })
    return () => {
      observer?.remove()
    }
  }, [scene])

  return fps
}
