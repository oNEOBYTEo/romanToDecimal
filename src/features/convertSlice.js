import { createSlice } from '@reduxjs/toolkit';
import { sumRoman, sumInt } from '../helpers/filters';
export const convertSlice = createSlice({
  name: 'convert',
  initialState: {
    value: '',
  },
  reducers: {
    romanToDecimal: (state, action) => {
      if (
        parseInt(sumRoman(action.payload)) < 1 ||
        parseInt(sumRoman(action.payload)) > 3999
      ) {
        alert('no puedes llegar a mas de MMMCMXCIX(3999)');
        state.value = '';
      } else {
        state.value = sumRoman(action.payload);
      }
    },
    decimalToRoman: (state, action) => {
      if (parseInt(action.payload) < 1 || parseInt(action.payload) > 3999) {
        alert('no puedes llegar a mas de 3999 (MMMCMXCIX), ni menos de 1');
        state.value = '';
      } else {
        state.value = sumInt(parseInt(action.payload));
      }
    },
  },
});

export const { romanToDecimal, decimalToRoman } = convertSlice.actions;

export default convertSlice.reducer;
