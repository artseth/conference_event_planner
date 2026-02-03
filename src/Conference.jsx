import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "./venueSlice2";
import TotalCost from "./TotalCost";
import 

const Conference = () => {

     const dispatch = useDispatch();
     const venueItems = useSelector(state => state.venue);
     const mealItems = useSelector (state => state.meals)
     const remainingAuditoriumQuantity = 3 - (venueItems.find((item) => item.name === "Auditorium Hall (Capacity:200)").quantity)

    const handleAddToCart = (index) => {
        if (venueItems[index].name === "Auditorium Hall (Capacity:200)" && venueItems[index].quantity >= 3) {
            return;
        }
        dispatch(incrementQuantity[index]);
    }

    const handleRemoveFromCart = (index) => {
        if (venueItems[index].quantity > 0) {
            dispatch(decrementQuantity[index])
        }
    }

    const calculateTotalCost = (section) => {
        let totalCost = 0;
        if (section === 'venue') {
            venueItems.forEach((item) => {totalCost += item.name * item.quantity})
        }
    }

    const venueTotalCost = calculateTotalCost('venue');

    return(
     <>
     
     </>   
    )
}