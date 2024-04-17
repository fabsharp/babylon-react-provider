import { Nullable, Observable, Observer, Scene } from '@babylonjs/core'
import { useEffect, useState } from 'react'
import { matcher } from 'matcher'
import { useScene } from './useScene'

type Namable = {
  name: string
}

type KeyOfType<T, V> = keyof {
  [P in keyof T as T[P] extends V ? P : never]: any
}

/** @internal */
export function useSceneNodes<T extends Namable>(
  property: KeyOfType<Scene, Array<Namable>>,
  sceneObservers: KeyOfType<Scene, Observable<any>>[],
  selector?: string
): T[] {
  const [items, setItems] = useState<Array<T>>([])
  const [filtered, setFiltered] = useState<Array<T>>([])
  const scene = useScene()
  useEffect(() => {
    if (!scene) {
      return () => {}
    }
    setItems([...scene[property]])
    const observers: Nullable<Observer<any>>[] = []
    sceneObservers.forEach((observable) => {
      observers.push(
        scene[observable].add(() => {
          setItems([...scene[property]])
        })
      )
    })
    return () => {
      observers.forEach((observer) => observer?.remove())
    }
  }, [scene])

  useEffect(() => {
    if (selector) {
      const names = items.map((item) => item.name)
      const filteredNames = matcher(names, selector)
      setFiltered(items.filter((item) => filteredNames.indexOf(item.name) !== -1))
    } else {
      setFiltered(items)
    }
  }, [items, selector])

  return filtered
}
