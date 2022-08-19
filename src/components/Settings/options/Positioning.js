import React from 'react'
import PropTypes from 'prop-types'
import {
  Stack,
  TextField,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  FormLabel,
} from '@mui/material'
import SettingsLayout from '../layout/SettingsLayout'

const Positioning = ({ stateTSettings, handleInputChange }) => {
  const { x, y, direction } = stateTSettings
  return (
    <SettingsLayout title="Position">
      <Stack direction="row" spacing={{ xs: 2 }} alignItems="center">
        <FormLabel>Widget direction</FormLabel>
        <FormControl>
          <RadioGroup
            row
            name="direction"
            value={direction}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          >
            <FormControlLabel value="row" control={<Radio />} label="Row" />
            <FormControlLabel
              value="column"
              control={<Radio />}
              label="Column"
            />
          </RadioGroup>
        </FormControl>
      </Stack>
      <Stack direction="row" spacing={{ xs: 2 }} alignItems="center">
        <TextField
          fullWidth
          name="x"
          size="small"
          type="number"
          variant="outlined"
          margin="dense"
          label="Position X"
          value={x}
          onChange={(e) =>
            handleInputChange(e.target.name, parseInt(e.target.value))
          }
        />
        <TextField
          fullWidth
          name="y"
          size="small"
          type="number"
          variant="outlined"
          margin="dense"
          label="Position Y"
          value={y}
          onChange={(e) =>
            handleInputChange(e.target.name, parseInt(e.target.value))
          }
        />
      </Stack>
    </SettingsLayout>
  )
}

Positioning.propTypes = {
  stateTSettings: PropTypes.shape({
    direction: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
  handleInputChange: PropTypes.func.isRequired,
}

export default Positioning
