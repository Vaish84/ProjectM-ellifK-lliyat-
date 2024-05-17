import { configureStore } from '@reduxjs/toolkit'
import utilityPageReducer from './reducers/utilityPageSlice';



export const store = configureStore({
    reducer: {
        utilityPage: utilityPageReducer
      },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch