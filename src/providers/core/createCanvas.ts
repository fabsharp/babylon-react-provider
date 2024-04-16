export default function createCanvas() {
  const masterCanvas = document.createElement('canvas')
  masterCanvas.style.width = '100%'
  masterCanvas.style.height = '100%'
  masterCanvas.style.touchAction = 'none'
  masterCanvas.id = 'babylon-rendering-canvas'
  return masterCanvas
}
