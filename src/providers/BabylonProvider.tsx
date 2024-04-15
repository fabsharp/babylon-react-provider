import React, { PropsWithChildren, useEffect, useState } from 'react'
import ProviderInstance from './core/ProviderInstance'
import { BabylonProviderProp } from './BabylonProviderProps'

const BabylonProviderContext = React.createContext<ProviderInstance>({} as ProviderInstance)

export default function BabylonProvider(props: PropsWithChildren<BabylonProviderProp>) {
  const [instance] = useState<ProviderInstance>(() => new ProviderInstance(props))

  useEffect(() => () => instance.dispose(), [])

  const { children } = props

  return <BabylonProviderContext.Provider value={instance}>{children}</BabylonProviderContext.Provider>
}

export const useBabylonProvider = () => React.useContext(BabylonProviderContext)
