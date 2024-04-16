/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  entryPoints: ["./src/index.ts"],
  out: "github_page",
  externalSymbolLinkMappings: {
    "@babylonjs/core": {
      Engine: 'https://doc.babylonjs.com/typedoc/classes/BABYLON.Engine',
      AbstractMesh: 'https://doc.babylonjs.com/typedoc/classes/BABYLON.AbstractMesh',
      Scene: 'https://doc.babylonjs.com/typedoc/classes/BABYLON.Scene',
      AssetContainer: 'https://doc.babylonjs.com/typedoc/classes/BABYLON.AssetContainer'
    }
  },
  readme: './doc/index.md',
  searchInComments: true,
  navigationLinks: {
    Github: "https://github.com/fabsharp/babylon-react-provider"
  },
  "visibilityFilters": {},
  includes: './doc',
  excludeInternal: true
}