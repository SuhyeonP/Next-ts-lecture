import { configureStore } from '@reduxjs/toolkit';
import initSlice from '@/store/slice/initialSlice';

const store = configureStore({
  reducer: {
    init: initSlice.reducer,
  },
});

export default store;
