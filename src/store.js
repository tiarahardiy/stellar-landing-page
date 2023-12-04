import { configureStore } from "@reduxjs/toolkit";
import storyReducer from "./reduxtoolkit/storySlice";
import trainingReducer from "./reduxtoolkit/trainingSlice";
import merchantReducer from "./reduxtoolkit/merchantSlice";
import locationReducer from "./reduxtoolkit/locationSlice";

export const store = configureStore({
  reducer: {
    story: storyReducer,
    training: trainingReducer,
    merchant: merchantReducer,
    location: locationReducer,
  },
});

export default store;
