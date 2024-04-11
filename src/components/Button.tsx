/* eslint-disable jsx-a11y/aria-role */
import React, { useState } from 'react'

export default function Button() {
  const [enabled, setEnabled] = useState(false)
  const onClick = () => {
    setEnabled(true)
  }
  return (
    <div>
      <button type="button" onClick={onClick}>
        Click
      </button>
      {enabled && <div role="info">hello world</div>}
    </div>
  )
}
