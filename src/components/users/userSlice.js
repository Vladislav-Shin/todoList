import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: "",
  usersLoadingStatus: "idle",
  term: ""
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersFetching: state => {state.usersLoadingStatus = "loading"},
    usersFetched: (state, action) => {
      state.usersLoadingStatus = "idle";
      state.users = action.payload
    },
    usersFetchingError: state => {state.usersLoadingStatus = "error"},
    userCreated: (state, action) => {
      state.users.push(action.payload)
    },
    userDeleted: (state, action) => {
      state.users = state.users.filter(item => item.id !== action.payload)
    },
    searchUser: (state, action) => {
      state.term = action.payload
    }
  }
})

const { actions, reducer } = usersSlice;

export default reducer;
export const {
  usersFetching,
  usersFetched,
  usersFetchingError,
  userCreated,
  userDeleted,
  searchUser
} = actions;