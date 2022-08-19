import React, { useState, useRef } from 'react'
import { Stack, Typography, Button } from '@mui/material'
import SettingsLayout from '../layout/SettingsLayout'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import HistoryIcon from '@mui/icons-material/History'

const Presets = () => {
  const inputFile = useRef(null)
  const [filename, setFilename] = useState('No file selected ...')

  const onClickUpload = () => inputFile.current.click()

  return (
    <SettingsLayout title="Presets">
      <Stack
        direction="row"
        spacing={{ xs: 2 }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography color="text.secondary" variant="overline">
          {filename}
        </Typography>
        <Stack
          direction="row"
          spacing={{ xs: 2 }}
          justifyContent="space-between"
          alignItems="center"
        >
          <input
            type="file"
            id="file"
            ref={inputFile}
            style={{ display: 'none' }}
          />
          <Button
            variant="contained"
            size="small"
            endIcon={<FileUploadIcon />}
            onClick={onClickUpload}
          >
            LOAD
          </Button>
          <Button
            variant="contained"
            size="small"
            color="warning"
            endIcon={<HistoryIcon />}
          >
            RESET
          </Button>
        </Stack>
      </Stack>
    </SettingsLayout>
  )
}

export default Presets
