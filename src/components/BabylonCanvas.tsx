import React, { ReactNode, useEffect, useRef } from 'react'
import { useCanvas } from '../providers/CanvasProvider'
import { useEngine } from '../providers/EngineProvider'

type BabylonCanvasProps = {
  children?: ReactNode | ReactNode[]
  /** CSS properties of the container */
  style?: React.CSSProperties
}

/**
 * Container for the rendering ```<canvas>``` used by babylonJS [Engine](https://doc.babylonjs.com/typedoc/classes/BABYLON.Engine#constructor) to render.
 *
 * @remarks ```<BabylonProvider>``` require one ```<BabylonCanvas>```
 * @example
 * ```
 * <BabylonProvider>
 *  <Menu/>
 *  <BabylonCanvas/>
 * </BabylonProvider>
 * ```
 */
export default function BabylonCanvas({ children, style }: BabylonCanvasProps) {
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
    container.current?.prepend(canvas)
    engine.resize()
  }, [])
  return (
    <div style={containerCSS} ref={container}>
      {children}
    </div>
  )
}
