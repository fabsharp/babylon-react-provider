# Babylon React Provider

## Installation
```
npm install "babylon-react-provider"
```

## Setup

After installing **Babylon React Provider** you need to setup ```<BabylonProvider>``` at the root of your application.

You will also need a ```<BabylonCanvas>``` i.e a ```<canvas>``` where BabylonJS will render.

 ```tsx
 export default function App() {
  return <Grid>
    <BabylonProvider> // Allow all children components to use babylon hooks like useScene()
      <Grid>
        <Item>
          <BabylonCanvas /> // Rendering Canvas
        </Item>
      ...
        <Item>
          <MyComponentUsingBabylon /> // Mixed React / Babylon component
        </Item>
      </Grid>
    </BabylonProvider>
  </Grid>
}
 ```
 For example if you want to load a GLTF file and log all the meshes in the console with  ```<MyComponentUsingBabylon />```
```tsx
export default function MyComponentUsingBabylon() {
  useGLTF('https://playground.babylonjs.com/scenes/Buggy/glTF-Draco/Buggy.gltf')
  const meshes = useMeshes()
  useEffect(() => {
    console.log(meshes.map(mesh => mesh.name))
  }, [meshes])
}
```

## Demos

[Full list of demos and examples](https://github.com/fabsharp/babylon-react-provider/tree/master/demos)

### Mixed Babylon/React app with material-ui and react-router

### Use ```<Suspense>``` to design your loading screen

### Create custom hook with BabylonJS

### Test your Babylon/React app with react-testing-library

