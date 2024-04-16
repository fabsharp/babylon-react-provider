import React, { useEffect, useRef } from 'react'
import { useCanvas, useEngine } from '../hooks'

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
 */
export default function BabylonCanvas(style?: React.CSSProperties): React.JSX.Element {
  const container = useRef<HTMLDivElement>(null)
  const engine = useEngine()
  const canvas = useCanvas()

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
    if (canvas) {
      container.current?.prepend(canvas)
      engine?.resize()
    }
  }, [canvas])
  return <div style={containerCSS} ref={container} />
}
