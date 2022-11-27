import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartRedux";
import UserSlice from "./UserSlice";

export default configureStore({
  reducer: {
    cart: CartReducer,
    user: UserSlice,
  },
});
