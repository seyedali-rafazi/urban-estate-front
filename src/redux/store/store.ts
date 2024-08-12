import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feachers/user/userSlice";
import houseReducer from "../feachers/products/houseSlice";
import houseByIdReducer from "../feachers/productById/productByIdSlice";
import favouriteHouse from "../feachers/favourtieProduct/favourtieProductSlice";
import addProduct from "../feachers/addProduct/addProductSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    house: houseReducer,
    houseById: houseByIdReducer,
    favouriteHouse: favouriteHouse,
    add: addProduct,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
