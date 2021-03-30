import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

// **createSlice is a function that takes in the initialState, an object with reducer functions and a slice name
// ** internally the createSlice function uses createAction and createReducer

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // ** The reducers object is something called an object with "case reducer" functions => Each key-value pair is like a switch statement in your typical reducer file.
  reducers: {
    // ** the reducer object has key values which are the names of the actions.
    // ** each value is a function that modifies the state and automatically creates "draft states"
    // ** so that the original state is note mutated
    increment: state => {
      state.value += 1
    },

    decrement: state => {
      state.value -= 1
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }

  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount: number): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer