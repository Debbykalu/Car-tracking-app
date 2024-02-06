import { configureStore } from "@reduxjs/toolkit";
import { carsReducers, changeSearchTerm, addCar, removeCar } from "./slices/CarsSlice";
import { formReducer, changeName, changeCost } from "./slices/FormSlice";



const store = configureStore({
   reducer: {
    cars: carsReducers,
    form: formReducer,
   }
})


export { store, changeCost, changeName, changeSearchTerm, addCar, removeCar};