import { useEffect, useState } from 'react'
import { Engine } from '@babylonjs/core'
import { useBabylonProvider } from '../providers'

export default function useEngine() {
  const provider = useBabylonProvider()
  const [engine, setEngine] = useState<Engine>()
  useEffect(() => {
    if (provider) {
      setEngine(provider.engine)
    }
  }, [provider])
  return engine
}
