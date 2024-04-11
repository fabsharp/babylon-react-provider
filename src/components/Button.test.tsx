/* eslint-disable jsx-a11y/aria-role */
import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import Button from './Button'
import '@testing-library/jest-dom'

test('adds 1 + 2 to equal 3', async () => {
  render(<Button />)
  fireEvent.click(screen.getByText('Click'))
  await screen.findByRole('info')
  expect(screen.queryByRole('info')).toHaveTextContent('hello world')
})
