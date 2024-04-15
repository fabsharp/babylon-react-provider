import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { BabylonCanvas, BabylonProvider, FPS } from 'babylon-react-provider'

import { Button, Container } from '@mui/material'
import LoadGLB from './LoadGLB'
import Meshes from './Meshes'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  padding: theme.spacing(1),
  textAlign: 'center',
}))

function App() {
  const [mounted, setMounted] = useState(false)
  return (
    <>
      <Container>
        {mounted && (
          <Grid container spacing={2}>
            <BabylonProvider>
              <Grid item xs={8} lg={8}>
                <Item>
                  <BabylonCanvas />
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Meshes />
                </Item>
              </Grid>
              <Grid item xs={8} lg={8}>
                <Item>
                  <LoadGLB url="https://playground.babylonjs.com/scenes/Buggy/glTF-Draco/Buggy.gltf" />
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <FPS />
                </Item>
              </Grid>
            </BabylonProvider>
            <BabylonProvider>
              <Grid item xs={8} lg={8}>
                <Item>
                  <BabylonCanvas />
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Meshes />
                </Item>
              </Grid>
              <Grid item xs={4} lg={4}>
                <Item>
                  <LoadGLB url="https://playground.babylonjs.com/scenes/dummy2.babylon" />
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <FPS />
                </Item>
              </Grid>
            </BabylonProvider>
          </Grid>
        )}
      </Container>
      <Button onClick={() => setMounted(!mounted)}>Unmount</Button>
    </>
  )
}

export default App
