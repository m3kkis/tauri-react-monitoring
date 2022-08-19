import React from 'react'
import { Stack, Typography, Grid, Box } from '@mui/material'

const SettingsLayout = ({ title, selectedColor, children }) => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb={4}>
      <Stack direction="row" alignItems="center" spacing={1} px={2} mb={1}>
        <Box sx={{ ...styleLinetrace, width: '25px' }}></Box>
        <Typography variant="overline">{title}</Typography>
        <Box sx={{ ...styleLinetrace, width: '100%' }}></Box>
      </Stack>
      <Stack direction="column" spacing={1} px={2}>
        {children}
      </Stack>
    </Grid>
  )
}

const styleLinetrace = {
  height: 2,
  backgroundColor: '#71a5c7',
}

export default SettingsLayout
