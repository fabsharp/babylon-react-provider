import React, { PropsWithRef, ReactElement, ReactNode, Ref, forwardRef, useEffect, useRef } from "react";
import { useCanvas } from "../providers/CanvasProvider";
import { useEngine } from "../providers/EngineProvider";


export default function BabylonCanvas(props : { children?: ReactNode[] | ReactNode, style?: React.CSSProperties}) {
  const container = useRef<HTMLDivElement>(null);
  const engine = useEngine()
  const canvas = useCanvas()

  const containerCSS: React.CSSProperties = props.style ?? {
    height: '100%',
    minHeight: '350px',
    minWidth: '350px',
    position: 'relative',
    width: '100%',
  }
  useEffect(() => {
    container.current?.prepend(canvas)
    engine.resize()
  }, [])
  return (
    <div style={containerCSS} ref={ container }>
      {props.children}
    </div>
  )
}