import { Engine, Scene } from '@babylonjs/core'
import createCanvas from './createCanvas'
import createEngine from './createEngine'
import createScene from './createScene'
import { BabylonProviderProp } from '../BabylonProviderProps'

export default class ProviderInstance {
  #canvas: HTMLCanvasElement

  #scene: Scene

  #engine: Engine

  constructor(private options?: BabylonProviderProp) {
    this.#canvas = createCanvas()
    this.#engine = createEngine(options, this.#canvas)
    this.#scene = createScene(this.#engine, options?.sceneOptions)
  }

  get canvas() {
    return this.#canvas
  }

  get engine() {
    return this.#engine
  }

  get scene() {
    return this.#scene
  }

  dispose() {
    this.scene.dispose()
    this.engine.dispose()
  }
}
