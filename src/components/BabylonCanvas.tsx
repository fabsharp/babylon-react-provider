import React, { useEffect, useRef } from 'react'
import { useBabylonProvider } from '../providers'

/**
 * React Element for the rendering ```<canvas>``` used by babylonJS engine to render.
 * @see {@link BabylonProvider}
 *
 * [[include:BabylonCanvas.md]]
 *
 * @category components
 *
 */
export default function BabylonCanvas(style?: React.CSSProperties): React.JSX.Element {
  const container = useRef<HTMLDivElement>(null)
  const provider = useBabylonProvider()

  const containerCSS: React.CSSProperties =
    style ??
    {
      // height: '100%',
      // minHeight: '350px',
      // minWidth: '350px',
      // position: 'relative',
      // width: '100%',
    }

  useEffect(() => {
    if (provider) {
      container.current?.prepend(provider.canvas)
      provider.onCanvasMounted.notifyObservers(null)
      provider.engine.resize()
    }
  }, [provider])
  return <div style={containerCSS} ref={container} />
}
