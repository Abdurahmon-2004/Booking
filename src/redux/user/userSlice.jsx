import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
  },
  reducers: {
    setUserData: (state, {payload}) => {
      state.userData = payload
    },
  },
})

export const {setUserData} = userSlice.actions

export default userSlice.reducer
