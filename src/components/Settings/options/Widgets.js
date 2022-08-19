import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Typography,
  Stack,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Button,
  Paper,
} from '@mui/material'
import SettingsLayout from '../layout/SettingsLayout'

const not = (a, b) => {
  return a.filter((value) => b.indexOf(value) === -1)
}

const intersection = (a, b) => {
  return a.filter((value) => b.indexOf(value) !== -1)
}

const Widgets = ({ stateTSettings, handleWidgetsChanges }) => {
  const [checked, setChecked] = useState([])
  const [left, setLeft] = useState([...stateTSettings.availableWidgets])
  const [right, setRight] = useState([...stateTSettings.usedWidgets])

  const leftChecked = intersection(checked, left)
  const rightChecked = intersection(checked, right)

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
  }

  const handleAllRight = () => {
    setRight(right.concat(left))
    setLeft([])
    handleWidgetsChanges(left, right)
  }

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked))
    setLeft(not(left, leftChecked))
    setChecked(not(checked, leftChecked))
    handleWidgetsChanges(left, right)
  }

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked))
    setRight(not(right, rightChecked))
    setChecked(not(checked, rightChecked))
    handleWidgetsChanges(left, right)
  }

  const handleAllLeft = () => {
    setLeft(left.concat(right))
    setRight([])
    handleWidgetsChanges(left, right)
  }

  const customList = (items) => (
    <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
      <List dense component="div">
        {items.map((value) => {
          return (
            <ListItem key={value.name} button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={value.name} />
            </ListItem>
          )
        })}
        <ListItem />
      </List>
    </Paper>
  )

  return (
    <SettingsLayout title="Widgets">
      <Stack direction="row" spacing={{ xs: 2 }} alignItems="center">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography textAlign="center" variant="subtitle2">
              Available
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography textAlign="center" variant="subtitle2">
              Current
            </Typography>
          </Grid>
          <Grid item>{customList(left)}</Grid>
          <Grid item>
            <Grid container direction="column" alignItems="center">
              <Button
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleAllRight}
                disabled={left.length === 0}
              >
                ≫
              </Button>
              <Button
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleCheckedRight}
                disabled={leftChecked.length === 0}
              >
                &gt;
              </Button>
              <Button
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleCheckedLeft}
                disabled={rightChecked.length === 0}
              >
                &lt;
              </Button>
              <Button
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleAllLeft}
                disabled={right.length === 0}
              >
                ≪
              </Button>
            </Grid>
          </Grid>
          <Grid item>{customList(right)}</Grid>
        </Grid>
      </Stack>
    </SettingsLayout>
  )
}

Widgets.propTypes = {
  stateTSettings: PropTypes.shape({
    availableWidgets: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        color: PropTypes.string,
      }),
    ),
    usedWidgets: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        color: PropTypes.string,
      }),
    ),
  }),
  handleWidgetsChanges: PropTypes.func.isRequired,
}

export default Widgets
