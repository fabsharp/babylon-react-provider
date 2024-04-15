import { useEffect, useState } from 'react'
import { useBabylonProvider } from '../providers'

export default function useCanvas() {
  const provider = useBabylonProvider()
  const [canvas, setCanvas] = useState<HTMLCanvasElement>()
  useEffect(() => {
    if (provider) {
      setCanvas(provider.canvas)
    }
  }, [provider])
  return canvas
}
