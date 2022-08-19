import React from 'react'
import PropTypes from 'prop-types'
import { TextField, Stack } from '@mui/material'
import SettingsLayout from '../layout/SettingsLayout'

const Sizing = ({ stateTSettings, handleInputChange }) => {
  const { width, height } = stateTSettings
  return (
    <SettingsLayout title="Size">
      <Stack direction="row" spacing={{ xs: 2 }} alignItems="center">
        <TextField
          fullWidth
          name="width"
          label="Width"
          size="small"
          type="number"
          variant="outlined"
          margin="dense"
          value={width}
          onChange={(e) =>
            handleInputChange(e.target.name, parseInt(e.target.value))
          }
        />
        <TextField
          fullWidth
          name="height"
          label="Height"
          size="small"
          type="number"
          variant="outlined"
          margin="dense"
          value={height}
          onChange={(e) =>
            handleInputChange(e.target.name, parseInt(e.target.value))
          }
        />
      </Stack>
    </SettingsLayout>
  )
}

Sizing.propTypes = {
  stateTSettings: PropTypes.shape({
    direction: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  handleInputChange: PropTypes.func.isRequired,
}

export default Sizing
