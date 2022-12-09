import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "./fetures/playerSlice";

export const store = configureStore({
  reducer: {
    player: playerSlice
  }
})