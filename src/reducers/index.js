/* import { createReducer } from "@reduxjs/toolkit";

import {
  usersFetching,
  usersFetched,
  usersFetchingError,
  userCreated,
  userDeleted,
  searchUser
} from "../actions";

const initialState = {
  users: [],
  usersLoadingStatus: "idle",
  term: ""
}

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(usersFetching, state => {
      state.usersLoadingStatus = "loading";
    })
    .addCase(usersFetched, (state, action) => {
      state.usersLoadingStatus = "idle";
      state.users = action.payload
    })
    .addCase(usersFetchingError, state => {
      state.usersLoadingStatus = "error"
    })
    .addCase(userCreated, (state, action) => {
      state.users.push(action.payload)
    })
    .addCase(userDeleted, (state, action) => {
      state.users = state.users.filter(item => item.id !== action.payload)
    })
    .addCase(searchUser, (state, action) => {
      state.term = action.payload
    })
    .addDefaultCase(() => {})
})

export default reducer; */

// не работает с TypeScript, только нативный JS, для обових вариантов нужен createACtion
// const reducer = createReducer(initialState, {
//   [usersFetching]: state => { 
//                 state.usersLoadingStatus = "loading" 
//                 },
//   [usersFetched]: (state, action) => {
//                 state.usersLoadingStatus = "idle";
//                 state.users = action.payload
//                 },
//   [usersFetchingError]:state => {
//                  state.usersLoadingStatus = "error"
//                 },
//   [userCreated]:(state, action) => {
//                 state.users.push(action.payload)
//                 },
//   [userDeleted]:(state, action) => {
//                 state.users = state.users.filter(item => item.id !== action.payload)
//                 },
//   [searchUser]:(state, action) => {
//                 state.term = action.payload
//                 },
//         },
//   [],
//   state => state
// )


// самописный reducer
/* const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "USERS_FETCHING":
      return {
        ...state,
        usersLoadingStatus: "loading"
      }
    case "USERS_FETCHED":
      return {
        ...state,
        users: action.payload,
        usersLoadingStatus: "idle"
      }
    case "USERS_FETCHING_ERROR":
      return {
        ...state,
        usersLoadingStatus: "error"
      }     
    case "USER_CREATED":
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case "USER_DELETED":
      return {
        ...state,
        users: state.users.filter(item => item.id !== action.payload)
      }
    case "SEARCH_USER": 
      return {
        ...state,
        term: action.payload
      }
    default: return state 
  }
} */

