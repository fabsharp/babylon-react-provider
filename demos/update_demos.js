import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import path from 'path'

/** 
 * Update babylon-react-provider version in each demos to update codesandbox and stackblitz.
 * To be called by ```npm version```, see ../package.json   
 **/

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const readJSON = async(path) => {
  return JSON.parse(await fs.readFile(path), 'utf8')
}

const { version } = await readJSON(path.join(__dirname, '../package.json'))

const folders = (await fs.readdir(__dirname, { withFileTypes: true})).filter(folder => folder.isDirectory())

folders.forEach(async folder => {
  const file = path.join(__dirname, folder.name, 'package.json')
  const pkg = await readJSON(file)
  pkg.dependencies['babylon-react-provider'] = version
  await fs.writeFile(file, JSON.stringify(pkg, null, 2))
})