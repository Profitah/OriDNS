import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  values: [], // 사용자의 여러 입력값을 저장할 배열
};

// 슬라이스 (리듀서와 액션) 생성. 
const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    // 상태와 사용자 입력값을 받아서 새로운 상태를 반환하는 리듀서
    addStringInput: (state, action) => {
      state.values.push(action.payload); // 상태값을 values 배열에 추가 맞나요? 
    },
  },
});

// 액션과 리듀서 내보내기
export const { addStringInput } = inputSlice.actions;
export default inputSlice.reducer;
