import { Engine, Observable, Scene } from '@babylonjs/core'
import createCanvas from './createCanvas'
import createEngine from './createEngine'
import createScene from './createScene'
import { BabylonProviderProp } from '../BabylonProviderProps'

/**
 * @category core
 */
export default class ProviderInstance {
  #canvas: HTMLCanvasElement

  #scene: Scene

  #engine: Engine

  static instances: ProviderInstance[] = []

  onCanvasMounted = new Observable()

  onSceneReset = new Observable()

  #id = 0

  #isCanvasMounted = false

  constructor(private options?: BabylonProviderProp) {
    this.#canvas = createCanvas()
    this.#engine = createEngine(options, this.#canvas)
    this.#scene = createScene(this.#engine, options?.sceneOptions)
    this.#id = ProviderInstance.instances.length
    ProviderInstance.instances.push(this)
    this.onCanvasMounted.addOnce(() => {
      this.#isCanvasMounted = true
    })
  }

  resetScene() {
    this.#scene.dispose()
    this.#scene = createScene(this.#engine, this.options?.sceneOptions)
    this.onSceneReset.notifyObservers(null)
  }

  get isCanvasMounted() {
    return this.#isCanvasMounted
  }

  get id() {
    return this.#id
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

  static checkInstances() {
    ProviderInstance.instances.forEach((instance, index) => {
      // eslint-disable-next-line no-console
      console.log(
        `instance - ${index} : engine.isDisposed = ${instance.engine.isDisposed}, scene.isDisposed = ${instance.scene.isDisposed}`,
        instance.canvas
      )
    })
  }
}
