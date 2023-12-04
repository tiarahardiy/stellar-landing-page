import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getLocation = createAsyncThunk(
  "location/getLocation",
  async () => {
    try {
      const response = await axios.get(
        "https://api.v3.gostellar.id/v1/api/cms/location/?by=def.created_at_branch",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic Og==",
          },
        }
      );
      console.log("respon location", response.data);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching location:", error);
      throw error;
    }
  }
);

const locationEntity = createEntityAdapter({
  selectId: (location) => location.id_branch,
});

const locationSlice = createSlice({
  name: "location",
  initialState: locationEntity.getInitialState(),
  extraReducers: {
    [getLocation.fulfilled]: (state, action) => {
      locationEntity.setAll(state, action.payload);
    },
  },
});

export const locationSelector = locationEntity.getSelectors(
  (state) => state.location
);
export default locationSlice.reducer;
