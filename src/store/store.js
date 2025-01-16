import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './home_slice_input';

const store = configureStore({
  reducer: {
    input: inputReducer, // 슬라이스 리듀서 등록
  },
});

export default store;
