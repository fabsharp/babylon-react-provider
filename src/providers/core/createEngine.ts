import { Engine, NullEngine } from '@babylonjs/core'
import { BabylonProviderProp } from '../BabylonProviderProps'

export default function createEngine(engineProviderProps?: BabylonProviderProp, canvas?: HTMLCanvasElement) {
  const defaultOptions: BabylonProviderProp = {
    antialias: true,
    engineOptions: {},
  }
  const { nullEngine, antialias, engineOptions } = { ...defaultOptions, ...engineProviderProps }

  console.log(engineProviderProps, nullEngine)
  if (nullEngine) {
    return new NullEngine()
  }

  if (!canvas) {
    throw new Error('You should provide a canvas if the nullEngine is not true')
  }
  const engine = new Engine(canvas, antialias, engineOptions)

  const resize = () => engine.resize()
  window.addEventListener('resize', resize)

  engine.onDisposeObservable.addOnce(() => {
    window.removeEventListener('resize', resize)
  })

  return engine
}
