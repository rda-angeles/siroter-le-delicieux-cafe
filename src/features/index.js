import { configureStore } from "@reduxjs/toolkit";
import coffeeSlices from "./slices/coffeeSlices";

const store = configureStore({
  reducer: {
    coffee: coffeeSlices,
  },
});

export default store;
