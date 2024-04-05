import { AssetContainer, SceneLoader } from "@babylonjs/core";
import { useEffect, useState } from "react";
import { useScene } from "../providers/SceneProvider";
import '@babylonjs/loaders'

export default function useGLTF(url?: string, beforeAddAllToScene?: (assetContainer: AssetContainer) => void) {
  const [loading, setLoading] = useState(false)
  const [assetContainer, setAssetContainer] = useState<AssetContainer>()
  const [progressComputable, setProgressComputable] = useState<boolean>()
  const [progressPercent, setProgressPercent] = useState<number>(0)
  const scene = useScene()
  useEffect(() => {
    if(url) {
      setLoading(true)
      SceneLoader.LoadAssetContainer(url, undefined, scene, (assetContainer: AssetContainer) => {
        if(beforeAddAllToScene) {
          beforeAddAllToScene(assetContainer)
        }
        assetContainer.addAllToScene()
        setLoading(false)
        setAssetContainer(assetContainer)
      }, (event) => {
        setProgressComputable(event.lengthComputable)
        if(event.lengthComputable) {
          setProgressPercent(Math.round(event.loaded * 100 / event.total))
        }
      })
    }
  }, [url])

  return { loading, assetContainer, progressComputable, progressPercent }
}