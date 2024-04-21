# Babylon React Provider

Plug your BabylonJS scenes inside a React UI. Designed for application to be easily compatible with **React UI Components Libraries** like material-ui, chakra, bootstrap, etc. 

## Why
Babylon React provider allow you to easily plug Babylon's scenes inside a React context using the __vanilla Babylon API__.  

Remark : If you want to use a __Babylon React like declarative syntax__ you should use the excellent library [react-babylonjs](https://github.com/brianzinn/react-babylonjs)

When you want to use Babylon inside a React UI you will have to adress some challenges like creating a Context to host the Engine, mount/unmount the rendering canvas, using states to access the scene, disposing ressources on React unmount etc. Babylon React Provider give you a solid foundation for all this tasks through fine-crafting & well-tested components. 

## How

## :beginner: Documentation

## :tv: Online demos
- Full list of available demos
- Featurings 
  - [Material UI]() 
  - [Chakra UI]() 
  - [Headless UI]()

## :dagger: Features
- Create mixed Babylon / React components
  - Custom hooks to build babylon application
    - useGLTF
    - useMesh 
    - useMaterial
    - ...more
  - Mounting, unmounting and disposing ressources 
- Multiple instances / contextes
- Hot Module Reloading
- ```<StrictMode>```
- ```<Suspense>```
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) 
- [React router](https://github.com/remix-run/react-router)

## :sparkles: Usage
```tsx
function Demo() {
  useGLF('')
  const meshes = useMeshes()

  return <ul>
    { meshes.map(mesh => (<li>{mesh.name}</li>)) }
  </ul>
}
```

## :construction: Install
```console 
npm install babylon-react-provider
```
