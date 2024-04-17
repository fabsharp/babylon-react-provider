# Babylon React Provider

A collection of React hooks and utilities to implement mixed Babylon/React components. Designed to be easily compatible with **React UI Components Libraries**. 

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
