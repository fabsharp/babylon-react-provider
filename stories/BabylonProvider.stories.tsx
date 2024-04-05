import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import BabylonProvider from '../src/providers/BabylonProvider'
import BabylonCanvas from '../src/components/BabylonCanvas'
import TestComponent from '../src/components/TestComponent'

const meta = {
  component: BabylonProvider,
  // @ts-ignore
  subcomponents: { BabylonCanvas, TestComponent },

  title: 'BabylonProvider',
} satisfies Meta<typeof BabylonProvider>

export default meta

type Story = StoryObj<typeof BabylonProvider>

export const Test1: Story = {
  render: () => (
    <BabylonProvider>
      <BabylonCanvas>
        <h1>Hello World</h1>
      </BabylonCanvas>
      <TestComponent />
    </BabylonProvider>
  ),
}
