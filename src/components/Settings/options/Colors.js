import React from 'react'
import PropTypes from 'prop-types'
import { Stack, Chip } from '@mui/material'
import SettingsLayout from '../layout/SettingsLayout'

const Colors = ({ stateTSettings }) => {
  return (
    <SettingsLayout title="Colors">
      <Stack direction="row" spacing={{ xs: 2 }} justifyContent="center">
        {stateTSettings.usedWidgets.map((widget) => {
          return (
            <Chip
              key={widget.name}
              label={widget.name}
              variant="outlined"
              sx={{ color: widget.color }}
            />
          )
        })}
      </Stack>
    </SettingsLayout>
  )
}

Colors.propTypes = {
  stateTSettings: PropTypes.shape({
    usedWidgets: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        color: PropTypes.string,
      }),
    ),
  }),
}

export default Colors
