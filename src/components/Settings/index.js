import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  UpdateValues,
  SaveChangesSettings,
  HideSettings,
  GetAllAvailableMonitors,
  GetCurrentMonitor,
  SetWidgets,
} from '../../redux/ToolbarSettings'
import { Grid, Paper, Button, Stack, Typography } from '@mui/material'
import {
  Presets,
  Monitors,
  MonitorsSkeleton,
  Positioning,
  Sizing,
  Widgets,
  Colors,
  Others,
} from './options'
import SaveIcon from '@mui/icons-material/Save'
import CloseIcon from '@mui/icons-material/Close'

const Settings = () => {
  const dispatch = useDispatch()

  const stateTSettings = useSelector((state) => state.ToolbarSettings)
  const stateTSettingsMonitors = useSelector(
    (state) => state.ToolbarSettings.monitors,
  )
  const stateTSettingsPMonitor = useSelector(
    (state) => state.ToolbarSettings.primaryMonitor,
  )

  const handleClickSave = async () => dispatch(SaveChangesSettings())
  const handleInputChange = (name, value) => {
    dispatch(UpdateValues({ name, value }))
  }
  const handleWidgetsChanges = (available, used) => {
    dispatch(SetWidgets({ available, used }))
  }
  const handleClickClose = async () => dispatch(HideSettings())

  const renderMonitors = () => {
    if (!!stateTSettingsMonitors.data && !stateTSettingsMonitors.pending) {
      return (
        <Monitors
          stateTSettingsMonitors={stateTSettingsMonitors.data}
          stateTSettingsPMonitor={stateTSettingsPMonitor.data}
        />
      )
    }
    if (stateTSettingsMonitors.pending) return <MonitorsSkeleton />
    if (stateTSettingsMonitors.error) {
      /*alert('Error')*/
    }
  }

  useEffect(() => {
    dispatch(GetCurrentMonitor())
    dispatch(GetAllAvailableMonitors())
  }, [dispatch])

  return (
    <Paper
      elevation={4}
      sx={{ height: '800px', backgroundColor: 'black', overflowY: 'scroll' }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={2}>
          <Typography variant="h3" textAlign="center">
            Settings
          </Typography>
        </Grid>
        <Presets />
        {renderMonitors()}
        <Positioning
          stateTSettings={stateTSettings}
          handleInputChange={handleInputChange}
        />
        <Sizing
          stateTSettings={stateTSettings}
          handleInputChange={handleInputChange}
        />
        <Widgets
          stateTSettings={stateTSettings}
          handleWidgetsChanges={handleWidgetsChanges}
        />
        <Colors stateTSettings={stateTSettings} />
        <Others />
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} my={2}>
          <Stack direction="row" justifyContent="space-between" mx={2}>
            <Button
              size="small"
              variant="contained"
              sx={{ width: 100 }}
              color="error"
              endIcon={<CloseIcon />}
              onClick={handleClickClose}
            >
              CLOSE
            </Button>
            <Button
              size="small"
              variant="contained"
              sx={{ width: 100 }}
              color="success"
              endIcon={<SaveIcon />}
              onClick={handleClickSave}
            >
              SAVE
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Settings
