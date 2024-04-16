import { renderHook } from '@testing-library/react-hooks'
import React, { PropsWithChildren } from 'react'
import { BabylonProvider } from '../providers'
import { BabylonCanvas } from '../components'
import useFPS from './useFPS'

test('should not be 0', async () => {
  const wrapper = ({ children }: PropsWithChildren) => (
    <BabylonProvider nullEngine>
      <BabylonCanvas />
      {children}
    </BabylonProvider>
  )
  const { result, waitForNextUpdate } = renderHook(() => useFPS(), { wrapper })
  await waitForNextUpdate()
  expect(result.current).not.toBe(0)
})
