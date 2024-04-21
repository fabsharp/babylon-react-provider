# Babylon React Provider

Plug your BabylonJS scenes inside a React UI. 

Designed for application with mixed React/BabylonJS components to be easily compatible with **React UI Components Libraries** like material-ui, chakra, bootstrap, etc. 

## Why
When you want to use Babylon inside a React UI you have to adress some challenges like creating a context to host the engine, mounting/unmounting the rendering ```<canvas>```, using states to access the scene, disposing ressources... ```<StrictMode>```, react-router, ```<Suspense>``` etc. 

**Babylon React Provider give you a solid foundation for all this tasks through fine-crafting & well-tested components.**

Remark : Babylon React provider is designed to be used with the _'vanilla' Babylon API_. If you want to use instead a _Babylon React like declarative syntax_ you should use the excellent library [react-babylonjs]()

## How
```npm install babylon-react-provider```

1. Wrap ```<BabylonProvider>``` at the top level of your components.

2. Use ```<BabylonCanvas>``` to set the rendering canvas in the document.

3. Use custom hooks to create mixed Babylon/React components. 

[Demos]()

[Custom Hook API]()

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
- React Testing Library 
- React router



