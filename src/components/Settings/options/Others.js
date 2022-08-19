import React from 'react'

import { Stack, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import SettingsLayout from '../layout/SettingsLayout'

const Others = () => {
  return (
    <SettingsLayout title="Others">
      <Stack direction="column" spacing={{ xs: 2 }} alignItems="start">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Start on Windows startup?"
            labelPlacement="start"
          />
        </FormGroup>
      </Stack>
    </SettingsLayout>
  )
}

export default Others
