import React from 'react'
import { Typography } from '@mui/material'
import WidgetLayout from '../layout/WidgetLayout'

const VRAM = ({ selectedColor }) => {
  return (
    <WidgetLayout title="VRAM" selectedColor={selectedColor}>
      <Typography variant="caption" color="text.secondary">
        Load
      </Typography>
      <Typography variant="overline">0%</Typography>
      <Typography variant="caption" color="text.secondary">
        0MB/0MB
      </Typography>
    </WidgetLayout>
  )
}

export default VRAM
