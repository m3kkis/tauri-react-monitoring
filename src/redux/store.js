import { configureStore } from '@reduxjs/toolkit'
import ToolbarSettingsReducer from './ToolbarSettings'

export const store = configureStore({
  reducer: {
    ToolbarSettings: ToolbarSettingsReducer,
  },
})
