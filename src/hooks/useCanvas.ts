import { useBabylonProvider } from '../providers'

export default function useCanvas() {
  const provider = useBabylonProvider()
  return provider.canvas
}
