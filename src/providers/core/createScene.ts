import { Engine, Scene, SceneOptions } from '@babylonjs/core'

export default function createScene(engine: Engine, sceneOptions?: SceneOptions) {
  const scene = new Scene(engine, sceneOptions)
  scene.createDefaultCamera(true, false, true)

  const renderLoop = () => {
    scene.render()
  }

  engine.runRenderLoop(renderLoop)

  scene.onDisposeObservable.addOnce(() => {
    engine.stopRenderLoop(renderLoop)
  })
  return scene
}
