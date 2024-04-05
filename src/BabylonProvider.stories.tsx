import type { Meta, StoryObj } from '@storybook/react';
import React from 'react'
import BabylonProvider from './providers/BabylonProvider'
import BabylonCanvas from './components/BabylonCanvas'
import TestComponent from './components/TestComponent';

const meta = {
  title: 'BabylonProvider',
  component: BabylonProvider,
  // @ts-ignore
  subcomponents: { BabylonCanvas, TestComponent }
} satisfies Meta<typeof BabylonProvider>

export default meta; 

type Story = StoryObj<typeof BabylonProvider>

export const Test1: Story = {

  render: (args) => (
    <BabylonProvider>
      
      <BabylonCanvas>
        <h1>Hello World</h1>
      </BabylonCanvas>
      <TestComponent/>
    </BabylonProvider>
  )
}