import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: './public/projector.jpg',
      name: 'projectors' ,
      cost: 200,
      quantity: 0,
    },

       {
      img: './public/speakers.jpg' ,
      name: 'speakers',
      cost: 35 ,
      quantity: 0,
    },

       {
      img: './public/mic.jpg' ,
      name: 'microphones' ,
      cost: 45 ,
      quantity: 0 ,
    },

       {
      img: './public/whiteboard.jpg',
      name: 'whiteboards' ,
      cost: 80,
      quantity: 0,
    },

       {
      img: './public/signs.jpg',
      name: 'signage',
      cost:80 ,
      quantity:0 ,
    },

    
    
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state [action.payload];
      if (item) {
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      const item = state [action.payload];
     if (item && item.quantity > 0)
      item.quantity--;
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
