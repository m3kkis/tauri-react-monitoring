import React from 'react'
import { Stack, Paper, Typography, Grid } from '@mui/material'

const WidgetLayout = ({ title, selectedColor, children }) => {
  return (
    <Grid item>
      <Paper elevation={1}>
        <Stack direction="row" alignItems="center" spacing={1} pl={1} pr={1}>
          <Typography variant="overline" sx={{ color: selectedColor }}>
            {title}
          </Typography>
          {children}
        </Stack>
      </Paper>
    </Grid>
  )
}

export default WidgetLayout
