/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  entryPoints: ["./src/index.ts"],
  out: "docs",
  externalSymbolLinkMappings: {
    "@babylonjs/core": {
      Engine: 'https://doc.babylonjs.com/typedoc/classes/BABYLON.Engine',
      AbstractMesh: 'https://doc.babylonjs.com/typedoc/classes/BABYLON.AbstractMesh',
      Scene: 'https://doc.babylonjs.com/typedoc/classes/BABYLON.Scene',
      AssetContainer: 'https://doc.babylonjs.com/typedoc/classes/BABYLON.AssetContainer'
    }
  },
  readme: './src/index.md',
  searchInComments: true,
  navigationLinks: {
    Github: "https://github.com/fabsharp/babylon-react-provider",
    "All Demos": "https://github.com/fabsharp/babylon-react-provider/tree/master/demos"
  },
  visibilityFilters: {},
  excludeInternal: true,
  includeVersion: true,
  navigation: {
    includeCategories: true,
    fullTree: true
  },
}