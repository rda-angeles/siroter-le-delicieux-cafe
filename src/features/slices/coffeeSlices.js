import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import coffeeApi from "../../common/coffeeApi";

export const getHotCoffees = createAsyncThunk(
  "coffees/getHotCoffees",
  async () => {
    const response = await coffeeApi.get("/hot");

    return response.data;
  }
);

export const getIcedCoffees = createAsyncThunk(
  "coffees/getIcedCoffees",
  async () => {
    const response = await coffeeApi.get("/iced");

    return response.data;
  }
);

const initialState = {
  hotCoffeeLists: {},
  icedCoffeeLists: {},
};

const coffeeSlices = createSlice({
  name: "coffee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHotCoffees.fulfilled, (state, { payload }) => {
        return {
          ...state,
          hotCoffeeLists: payload,
        };
      })
      .addCase(getIcedCoffees.fulfilled, (state, { payload }) => {
        return {
          ...state,
          icedCoffeeLists: payload,
        };
      });
  },
});

export const getHotCoffeeLists = (state) => state.coffee.hotCoffeeLists;
export const getIcedCoffeeLists = (state) => state.coffee.icedCoffeeLists;

export default coffeeSlices.reducer;
