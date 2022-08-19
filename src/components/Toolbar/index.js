import React from 'react'
import { Grid } from '@mui/material'
import { CPU, RAM, GPU, VRAM, Network } from './widgets'

const Toolbar = () => {
  return (
    <Grid
      container
      spacing={1}
      sx={{ cursor: 'default', userSelect: 'none' }}
      px={1}
    >
      <CPU selectedColor="#11ff00" />
      <RAM selectedColor="#03adfc" />
      <GPU selectedColor="#e1ff00" />
      <VRAM selectedColor="#ff0048" />
      <Network selectedColor="#ff8400" />
    </Grid>
  )
}

export default Toolbar
