# Babylon React Provider

A collection of React hooks and utilities for Babylon. Designed to be easily compatible with **React UI Components Libraries**. 

## Documentation

## Features
- Create mixed Babylon / React components
  - Custom hooks to build babylon application (ex: useScene, useMesh, useMaterial)
  - mounting, unmounting, disposing ressources 
- Multiple instances / contextes
- ```<StrictMode>```
- ```<Suspense>```
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) 
- [React router](https://github.com/remix-run/react-router)

## Usage
```tsx
function Demo() {
  useGLF('')
  const meshes = useMeshes()

  return <ul>
    { meshes.map(mesh => (<li>{mesh.name}</li>)) }
  </ul>
}
```

## Featured demo
[Demo Material UI]() | [Demo Chakra UI]() | [Demo Headless UI]()

## Install
```console 
npm install babylon-react-provider
```
