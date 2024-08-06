import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { login } from "../../../apis/auth"

interface InitialStateType {
  loading: boolean,
  userInfo: object,
  accessToken: string | null,
  refreshToken: string | null,
  error: string | null,
  success: boolean,
}

const initialState: InitialStateType = {
  loading: false,
  userInfo: {}, // for user object
  accessToken: null,
  refreshToken: null,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<unknown>) => {
        state.loading = false
        state.userInfo = action.payload || {}
        state.error = null
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = true
        state.error = action?.error?.message || "Registration failed";
      })
  },
})

export default authSlice.reducer