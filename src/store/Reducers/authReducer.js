import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    console.log("info", info);
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      // localStorage.setItem("accessToken", data.token);
      console.log(data);
      // return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response.data);
      // return rejectWithValue(error.response.data);
    }
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: null,
    errorMessage: null,
    loader: false,
    userInfo: "",
  },
  reducers: {},
  extraReducers: () => {},
});

export default authReducer.reducer;
