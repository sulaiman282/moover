import { configureStore } from "@reduxjs/toolkit";
import addUserSlices from "../feautes/addUser/addUserSlice";


//configure store
const store = configureStore({
  reducer: {
    User: addUserSlices,

  },
});

export default store;
