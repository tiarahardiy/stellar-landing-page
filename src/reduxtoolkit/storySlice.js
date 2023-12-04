import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getStory = createAsyncThunk("story/getStory", async () => {
  const response = await axios.get(
    "https://api.v3.gostellar.id/v1/api/cms/sucess_story?by=def.cretaed_at_story"
  );
  return response.data.data;
});

const storyEntity = createEntityAdapter({
  selectId: (story) => story.id_s_story,
});

const storySlice = createSlice({
  name: "story",
  initialState: storyEntity.getInitialState(),
  extraReducers: {
    [getStory.fulfilled]: (state, action) => {
      storyEntity.setAll(state, action.payload);
    },
  },
});

export const storySelector = storyEntity.getSelectors((state) => state.story);
export default storySlice.reducer;
