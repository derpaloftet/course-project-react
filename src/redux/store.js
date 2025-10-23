import { configureStore } from "@reduxjs/toolkit"
import { cartSlice } from "./entities/cart/slice.js"
import { api } from "./services/api.js"

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
})