import { configureStore } from "@reduxjs/toolkit";
import coffeeSlices from "./slices/coffeeSlices";
import foodSlices from "./slices/foodSlices";

const store = configureStore({
  reducer: {
    coffee: coffeeSlices,
    food: foodSlices
  },
});

export default store;
