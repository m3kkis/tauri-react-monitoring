import React from 'react'
import { Typography } from '@mui/material'
import WidgetLayout from '../layout/WidgetLayout'

const Network = ({ selectedColor }) => {
  return (
    <WidgetLayout title="NET" selectedColor={selectedColor}>
      <Typography variant="caption" color="text.secondary">
        Up
      </Typography>
      <Typography variant="overline">0KB/S</Typography>
      <Typography variant="caption" color="text.secondary">
        Down
      </Typography>
      <Typography variant="overline">0KB/S</Typography>
    </WidgetLayout>
  )
}

export default Network
