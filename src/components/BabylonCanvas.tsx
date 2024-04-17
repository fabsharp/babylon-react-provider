import React, { useEffect, useRef } from 'react'
import { useBabylonProvider } from '../providers'

/**
 * React Element for the rendering ```<canvas>``` used by babylonJS engine to render.
 * @title
 * @see {@link BabylonProvider}
 * @example
 * Wrap your components inside a ```<BabylonProvider>``` and use ```<BabylonCanvas>``` to specify where the rendering will occur.
 * ```tsx
 * export default function App() {
 *  return <Grid>
 *    <BabylonProvider> // Allow all children to use babylon hooks
 *      <Grid item xs={8}>
 *        <Item>
 *          <BabylonCanvas /> // Rendering Canvas
 *        </Item>
 *      </Grid>
 *      <Grid item xs={4}>
 *        <Item>
 *          <MyComponentUsingBabylon /> // Mixed React / Babylon component
 *        </Item>
 *      </Grid>
 *    </BabylonProvider>
 *  </Grid>
 * }
 * ```
 * @param style
 * @category components
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
