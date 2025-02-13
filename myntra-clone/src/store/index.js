import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import FetchStatusSlice from "./FetchStatusSlice";
import bagSlice from "./bagSlice";

const myntraStore =  configureStore({
  reducer:{
    items: itemsSlice.reducer,
    fetchStatus: FetchStatusSlice.reducer,
    bag : bagSlice.reducer
  }
});

export default myntraStore;