import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { BabylonCanvas, BabylonProvider, useGLTF } from 'babylon-react-provider'

import { Button, Container, Divider } from '@mui/material'
import BabylonReactComponent from './BabylonReactComponent'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  padding: theme.spacing(1),
  textAlign: 'center',
}))

function App() {
  const [mounted, setMounted] = useState(true)
  return (
    <>
      <Container>
      <Button variant="contained" size='large' color='success' onClick={() => setMounted(!mounted)}>{mounted ? 'Unmount Babylon React Provider' : 'Mount'}</Button>
        {mounted && (
          <Grid container spacing={2}>
            <BabylonProvider>
              <Grid item xs={8} lg={8}>
                <Item>
                  <BabylonCanvas />
                </Item>
              </Grid>
              <Grid item xs={4} lg={4}>
                <Item>
                <BabylonReactComponent/>
                </Item>
              </Grid>
            </BabylonProvider>
          </Grid>
        )}
      </Container>
    </>
  )
}

export default App
