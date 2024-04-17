import { useEffect, useState } from 'react'
import { Engine } from '@babylonjs/core'
import { useBabylonProvider } from '../../providers'

/**
 * Get the Babylon's Engine used by the current ```<BabylonProvider/>```
 * @category core
 * @returns Babylon's engine used by the current ```<BabylonProvider/>```
 */
export function useEngine() {
  const provider = useBabylonProvider()
  const [engine, setEngine] = useState<Engine>()
  useEffect(() => {
    if (provider) {
      setEngine(provider.engine)
    }
  }, [provider])
  return engine
}
