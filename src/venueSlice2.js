import { createSlice } from "@reduxjs/toolkit";
import { decrementQuantity, incrementQuantity } from "./venueSlice";

export const venueSlice = createSlice({
  name : 'Place' ,

  initialState : [
    {img: './public.mic.jpg',
     name: 'mic',
     cost: 45,
     quantity: 0    
    },
  ],

  reducers: {
    incrementQuantity: (state, action) => {
        const {payload: index} = action;
        if (state[index]) {
            if (state[index].name === 'Auditorium Hall (Capacity:200)' && state[index].quantity >= 3) {
                return;
            }
            state[index].quantity ++;

        }
    },
    
    decrementQuantity: (state, action) => {
            const {payload: index} = action;
            if (state[index]) {
                if (state[index].name === 'Auditorium Hall (Capacity:200)' && state[index].quantity > 0) {
                    state[index].quantity --;
                }
            }
        }
  }
});

export const {incrementQuantity, decrementQuantity} = venueSlice.actions;

export default venueSlice.reducer;
