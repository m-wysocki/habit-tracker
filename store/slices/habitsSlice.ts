import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface HabitsStateItem {
  name: string;
  frequency: number;
}

// Define the initial state using that type
const initialState: HabitsStateItem[] = [
  {
    name: 'InitialHabit',
    frequency: 3
  },
  {
    name: 'InitialHabit2',
    frequency: 3
  }
];

export const habitsSlice = createSlice({
  name: 'habits',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<HabitsStateItem>) => {
      state.push(action.payload);
    }
  }
});

export const { addHabit } = habitsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.habits;

export default habitsSlice.reducer;
