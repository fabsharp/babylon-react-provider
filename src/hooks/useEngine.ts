import { useBabylonProvider } from '../providers'

export default function useEngine() {
  const provider = useBabylonProvider()
  return provider.engine
}
