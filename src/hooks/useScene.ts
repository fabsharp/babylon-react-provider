import { useBabylonProvider } from '../providers'

export default function useScene() {
  const provider = useBabylonProvider()
  return provider.scene
}
