import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import playerSlice from "./fetures/playerSlice";
import { shazamCoreApi } from "./services/shazamCore"

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware)
})