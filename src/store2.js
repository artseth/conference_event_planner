import { configureStore } from "@reduxjs/toolkit";
import venueReducer from './venueSlice2'

export default configureStore ({
    reducer: {
        venue: venueReducer,
    }
})