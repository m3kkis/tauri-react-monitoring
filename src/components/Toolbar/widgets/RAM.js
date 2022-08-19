import React from 'react'
import { Typography } from '@mui/material'
import WidgetLayout from '../layout/WidgetLayout'

const RAM = ({ selectedColor }) => {
  return (
    <WidgetLayout title="RAM" selectedColor={selectedColor}>
      <Typography variant="caption" color="text.secondary">
        Load
      </Typography>
      <Typography variant="overline">0%</Typography>
      <Typography variant="overline" color="text.secondary">
        0MB/0MB
      </Typography>
    </WidgetLayout>
  )
}

export default RAM
