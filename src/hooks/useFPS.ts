import { useEffect, useState } from 'react'
import { useScene } from '../providers/SceneProvider'

export default function useFPS(threshold?: number) {
  const scene = useScene()
  const [fps, setFps] = useState(0)

  useEffect(() => {
    const observer = scene.onAfterRenderObservable.add(() => {
      const newFPS = Math.round(scene.getEngine().getFps())
      if (!threshold || Math.abs(newFPS - fps) > threshold) {
        setFps(newFPS)
      }
    })
    return () => {
      observer.remove()
    }
  }, [])

  return fps
}
