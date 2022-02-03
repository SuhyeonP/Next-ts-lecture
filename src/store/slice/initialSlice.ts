import { createSlice } from '@reduxjs/toolkit';

export interface IInit {
    init: any;
}

const initialState: IInit = {
  init: 0,
};

const initSlice = createSlice({
  name: 'init',
  initialState,
  reducers: {

  },
});

export default initSlice;
