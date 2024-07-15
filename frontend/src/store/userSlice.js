import { createSlice } from "@reduxjs/toolkit";
import authStorage from "../services/auth-storage";

const initialState = authStorage.getData() || {
  accessToken: null,
  user: {
    login: null,
    id: null
  }
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.accessToken = action.payload.accessToken
      state.user.login = action.payload.user.login
      state.user.id = action.payload.user.id

      authStorage.setData(state)
      console.log("user_setted")
    },
    removeUser(state) {
      state.accessToken = null
      state.user.login = null
      state.user.id = null

      authStorage.setData(state)
      console.log('user_removed')
    }
  }
})

export const {setUser, removeUser} = userSlice.actions
export default userSlice.reducer

