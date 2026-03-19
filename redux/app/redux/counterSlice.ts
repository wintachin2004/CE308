import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 1 กำหนดรูปแบบของ State
interface CounterState {
  value: number;
}

// 2 กำหนดค่าเริ่มต้นของ State
const initialState: CounterState = { value: 0 };

// 3 ใช้ createSlice สร้าง Reducer และ Actions
const counterSlice = createSlice({
  name: 'counter', // ชื่อ Slice นี้
  initialState, // State เริ่มต้น
  reducers: {
    // Action: เพิ่มค่า
    increment: (state) => {
      state.value += 1;
    },
    // Action: ลดค่า
    decrement: (state) => {
      state.value -= 1;
    },
    // Action: เพิ่มค่าตามจำนวนที่กำหนด
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// 4 Export Actions เพื่อให้ Component สามารถเรียกใช้ได้
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 5 Export Reducer เพื่อนำไปใช้ใน Store
export default counterSlice.reducer;