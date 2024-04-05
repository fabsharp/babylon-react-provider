import React from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { BabylonCanvas, BabylonProvider, FPS } from 'babylon-react-provider'

import { Container } from '@mui/material'
import LoadGLB from './LoadGLB'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  padding: theme.spacing(1),
  textAlign: 'center',
}))
function App() {
  return (
    <BabylonProvider>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <Item>
              <BabylonCanvas />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <LoadGLB />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <FPS />
            </Item>
          </Grid>
        </Grid>
      </Container>
    </BabylonProvider>
  )
}

export default App
