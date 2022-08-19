import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  WebviewWindow,
  LogicalPosition,
  LogicalSize,
  availableMonitors,
  currentMonitor,
} from '@tauri-apps/api/window'

const initialState = {
  SettingsWindow: 'setting_window',
  ToolbarWindow: 'toolbar_window',
  monitors: { data: null, error: null, pending: false },
  primaryMonitor: { data: null, error: null, pending: false },
  direction: 'row',
  x: 40,
  y: 0,
  width: 2560,
  height: 100,
  availableWidgets: [
    {
      name: 'CPU',
      color: '#11ff00',
    },
    {
      name: 'RAM',
      color: '#03adfc',
    },
    {
      name: 'GPU',
      color: '#e1ff00',
    },
    {
      name: 'VRAM',
      color: '#ff0048',
    },
    {
      name: 'Network',
      color: '#ff8400',
    },
  ],
  usedWidgets: [],
}

export const SaveChangesSettings = createAsyncThunk(
  'ToolbarSettings/SaveChangesSettings',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const stateToolbarSettings = state.ToolbarSettings
    const ToolbarWindow = WebviewWindow.getByLabel(
      stateToolbarSettings.ToolbarWindow,
    )
    await ToolbarWindow.setPosition(
      new LogicalPosition(
        parseInt(stateToolbarSettings.x),
        parseInt(stateToolbarSettings.y),
      ),
    )
    await ToolbarWindow.setSize(
      new LogicalSize(
        parseInt(stateToolbarSettings.width),
        parseInt(stateToolbarSettings.height),
      ),
    )
  },
)

export const HideSettings = createAsyncThunk(
  'ToolbarSettings/HideSettings',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const stateToolbarSettings = state.ToolbarSettings
    const SettingsWindow = WebviewWindow.getByLabel(
      stateToolbarSettings.SettingsWindow,
    )
    await SettingsWindow.hide()
  },
)

export const GetAllAvailableMonitors = createAsyncThunk(
  'ToolbarSettings/GetAllAvailableMonitors',
  async (_, thunkAPI) => {
    const response = await availableMonitors()
    return response
  },
)

export const GetCurrentMonitor = createAsyncThunk(
  'ToolbarSettings/GetCurrentMonitor',
  async (_, thunkAPI) => {
    const response = await currentMonitor()
    return response
  },
)

export const ToolbarSettingsSlice = createSlice({
  name: 'ToolbarSettings',
  initialState,
  reducers: {
    UpdateValues: (state, action) => {
      const { name, value } = action.payload
      state[name] = value
    },
    SetPrimaryMonitor: (state, action) => {},
    SetWidgets: (state, action) => {
      const { available, used } = action.payload
      state.availableWidgets = available
      state.usedWidgets = used
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetAllAvailableMonitors.pending, (state) => {
      state.monitors.data = null
      state.monitors.error = null
      state.monitors.pending = true
    })
    builder.addCase(GetAllAvailableMonitors.fulfilled, (state, action) => {
      state.monitors.data = action.payload
      state.monitors.error = null
      state.monitors.pending = false
    })
    builder.addCase(GetAllAvailableMonitors.rejected, (state, action) => {
      state.monitors.data = null
      state.monitors.error = action.error
      state.monitors.pending = false
    })
    builder.addCase(GetCurrentMonitor.pending, (state) => {
      state.primaryMonitor.data = null
      state.primaryMonitor.error = null
      state.primaryMonitor.pending = true
    })
    builder.addCase(GetCurrentMonitor.fulfilled, (state, action) => {
      state.primaryMonitor.data = action.payload
      state.primaryMonitor.error = null
      state.primaryMonitor.pending = false
    })
    builder.addCase(GetCurrentMonitor.rejected, (state, action) => {
      state.primaryMonitor.data = null
      state.primaryMonitor.error = action.error
      state.primaryMonitor.pending = false
    })
  },
})

export const {
  UpdateValues,
  SetPrimaryMonitor,
  SetWidgets,
} = ToolbarSettingsSlice.actions

export default ToolbarSettingsSlice.reducer
