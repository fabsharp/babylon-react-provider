/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  entryPoints: ["./src/hooks/index.ts"],
  out: "doc/api/hooks",
  externalSymbolLinkMappings: {
    "@babylonjs/core": {
      Engine: 'https://doc.babylonjs.com/typedoc/classes/BABYLON.Engine',
      AbstractMesh: 'https://doc.babylonjs.com/typedoc/classes/BABYLON.AbstractMesh',
      Scene: 'https://doc.babylonjs.com/typedoc/classes/BABYLON.Scene',
      AssetContainer: 'https://doc.babylonjs.com/typedoc/classes/BABYLON.AssetContainer'
    }
  },
  navigation: {
    includeCategories: true
  },
  defaultCategory: "misc",
  categoryOrder: [
    "core",
    "Mesh",
  ]
}