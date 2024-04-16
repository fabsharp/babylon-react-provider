import React, { PropsWithChildren, useEffect, useState } from 'react'
import ProviderInstance from './core/ProviderInstance'
import { BabylonProviderProp } from './BabylonProviderProps'

const BabylonProviderContext = React.createContext<ProviderInstance | undefined>(undefined)

export default function BabylonProvider(props: PropsWithChildren<BabylonProviderProp>) {
  const [instance, setInstance] = useState<ProviderInstance>()

  useEffect(() => {
    const providerInstance = new ProviderInstance(props)
    setInstance(providerInstance)
    return () => {
      providerInstance.dispose()
    }
  }, [])

  const { children } = props

  return <BabylonProviderContext.Provider value={instance}>{children}</BabylonProviderContext.Provider>
}

/** @internal */
export const useBabylonProvider = () => React.useContext(BabylonProviderContext)
