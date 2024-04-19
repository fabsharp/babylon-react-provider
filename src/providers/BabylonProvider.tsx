/* eslint-disable react/no-unused-prop-types */
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { EngineOptions, SceneOptions } from '@babylonjs/core'
import ProviderInstance from './core/ProviderInstance'

const BabylonProviderContext = React.createContext<ProviderInstance | undefined>(undefined)

export interface BabylonProviderProp {
  /**
   * Test
   */
  antialias?: boolean
  engineOptions?: EngineOptions
  nullEngine?: boolean
  sceneOptions?: SceneOptions
}

/**
 * Define the root element for all mixed components React/Babylon that will interact with this scene.
 *
 * [[include:BabylonProvider.md]]
 * @category components
 */
export default function BabylonProvider(props: PropsWithChildren<BabylonProviderProp>): React.JSX.Element {
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

/**
 *
 * @category core
 */
export const useBabylonProvider = () => React.useContext(BabylonProviderContext)
