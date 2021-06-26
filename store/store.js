import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/slice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
