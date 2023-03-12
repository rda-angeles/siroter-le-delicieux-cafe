import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../common/api";

export const getFoods = createAsyncThunk("foods/getFoods", async () => {
  const response = await api.get("/recipes/recipes");

  return response.data;
});

const initialState = {
  mainCourses: [],
  breakfasts: [],
  snacksAndSandwiches: [],
  sideDishes: [],
  lunch: [],
  desserts: [],
  soups: [],
  foodDetail: [],
};

const foodSlices = createSlice({
  name: "food",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFoods.fulfilled, (state, { payload }) => {
      const filterMainCourse = payload.filter(
        (item) => item.course === "Main Course"
      );
      const filterBreakfast = payload.filter(
        (item) => item.course === "Breakfast"
      );
      const filterSnackAndSandwich = payload.filter(
        (item) => item.course === "Snacks and Sandwiches"
      );
      const filterSideDishes = payload.filter(
        (item) => item.course === "Side Dishes"
      );
      const filterLunch = payload.filter((item) => item.course === "Lunch");
      const filterDesserts = payload.filter(
        (item) => item.course === "Desserts"
      );
      const filterSoup = payload.filter((item) => item.course === "Soup");

      return {
        ...state,
        mainCourses: filterMainCourse,
        breakfasts: filterBreakfast,
        snacksAndSandwiches: filterSnackAndSandwich,
        sideDishes: filterSideDishes,
        lunch: filterLunch,
        desserts: filterDesserts,
        soups: filterSoup,
      };
    });
  },
});

export const getMainCourse = (state) => state.food.mainCourses;
export const getSnacksAndSandwiches = (state) => state.food.snacksAndSandwiches;
export const getSideDishes = (state) => state.food.sideDishes;
export const getLunch = (state) => state.food.lunch;
export const getDesserts = (state) => state.food.desserts;
export const getSoups = (state) => state.food.soups;
export const getBreakfasts = (state) => state.food.breakfasts;

export default foodSlices.reducer;
