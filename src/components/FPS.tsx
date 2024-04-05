import React, { useEffect } from "react";
import useFPS from "../hooks/useFPS";

export default function FPS(props: { threshold?: number}) {
  const fps = useFPS(props.threshold)
  return <>{fps}</>
}