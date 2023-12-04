import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getMerchant = createAsyncThunk(
  "merchant/getMerchant",
  async () => {
    const response = await axios.get(
      "https://api.v3.gostellar.id/v1/api/cms/merchant/select?by=def.created_at_merchant",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic Og==",
        },
      }
    );
    console.log("respon merchant", response.data);
    return response.data.data;
  }
);

const merchantEntity = createEntityAdapter({
  selectId: (merchant) => merchant.id_merchant,
});

const merchantSlice = createSlice({
  name: "merchant",
  initialState: merchantEntity.getInitialState(),
  extraReducers: {
    [getMerchant.fulfilled]: (state, action) => {
      merchantEntity.setAll(state, action.payload);
    },
  },
});

export const merchantSelector = merchantEntity.getSelectors(
  (state) => state.merchant
);
export default merchantSlice.reducer;
