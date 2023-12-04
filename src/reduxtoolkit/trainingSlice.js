import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
  } from "@reduxjs/toolkit";
  import axios from "axios";
  
  export const getTraining = createAsyncThunk("traning/getTraining", async () => {
    const response = await axios.get(
      "https://api.v3.gostellar.id/v1/api/cms/training?by=def.created_at_c_training"
    );
    console.log("respon training", response.data);
    return response.data.data;
  });
  
  const trainingEntity = createEntityAdapter({
    selectId: (training) => training.id_cms_training,
  });
  
  const trainingSlice = createSlice({
    name: "training",
    initialState: trainingEntity.getInitialState(),
    extraReducers: {
      [getTraining.fulfilled]: (state, action) => {
        trainingEntity.setAll(state, action.payload);
      },
    },
  });
  
  export const trainingSelector = trainingEntity.getSelectors((state) => state.training);
  export default trainingSlice.reducer;
  