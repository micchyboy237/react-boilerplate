import {createSlice} from '@reduxjs/toolkit';
import {CONTACT} from '../../constants/redux';

const initialState = {
  data: [],
};

export const contactSlice = createSlice({
  name: CONTACT.state,
  initialState,
  reducers: {},
});

export default contactSlice.reducer;
