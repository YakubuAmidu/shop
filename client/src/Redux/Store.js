import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartRedux";
import UserReducer from "./UserRedux";

export default configureStore({
  reducer: {
    cart: CartReducer,
    user: UserReducer,
  },
});
