import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: JSON.parse(localStorage.getItem("userData")) || null,
  },
  reducers: {
    setUserData: (state, {payload}) => {
      state.userData = payload
      localStorage.setItem("userData", JSON.stringify(payload))
    },
  },
})

export const {setUserData} = userSlice.actions

export default userSlice.reducer
