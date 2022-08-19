import React from 'react'
import PropTypes from 'prop-types'
import {
  Stack,
  Skeleton,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material'
import SettingsLayout from '../layout/SettingsLayout'

const Monitors = ({ stateTSettingsMonitors, stateTSettingsPMonitor }) => {
  return (
    <SettingsLayout title="Monitors">
      <Stack direction="row" spacing={{ xs: 2 }} alignItems="center">
        <FormControl>
          <FormLabel>Select monitor</FormLabel>
          <RadioGroup
            row
            name="primaryMonitor"
            value={stateTSettingsPMonitor.name}
          >
            {stateTSettingsMonitors.map((monitor, idx) => {
              return (
                <FormControlLabel
                  key={monitor.name}
                  control={<Radio />}
                  label={`${monitor.name}`}
                  value={monitor.name}
                />
              )
            })}
          </RadioGroup>
        </FormControl>
      </Stack>
    </SettingsLayout>
  )
}

Monitors.propTypes = {
  stateTSettingsMonitors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      position: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
      }),
      scaleFactor: PropTypes.number,
      size: PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number,
      }),
    }),
  ).isRequired,
  stateTSettingsPMonitor: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    scaleFactor: PropTypes.number,
    size: PropTypes.shape({
      height: PropTypes.number,
      width: PropTypes.number,
    }),
  }).isRequired,
}

export const MonitorsSkeleton = () => {
  return (
    <SettingsLayout title="Monitors">
      <Stack direction="row" spacing={{ xs: 2 }} alignItems="center">
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rectangular" width={210} height={60} />
      </Stack>
    </SettingsLayout>
  )
}

export default Monitors
