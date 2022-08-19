import React from 'react'
import { Typography } from '@mui/material'
import WidgetLayout from '../layout/WidgetLayout'

const GPU = ({ selectedColor }) => {
  return (
    <WidgetLayout title="GPU" selectedColor={selectedColor}>
      <Typography variant="caption" color="text.secondary">
        Load
      </Typography>
      <Typography variant="overline">0%</Typography>
      <Typography variant="caption" color="text.secondary">
        Temp
      </Typography>
      <Typography variant="overline">0°</Typography>
    </WidgetLayout>
  )
}

export default GPU
