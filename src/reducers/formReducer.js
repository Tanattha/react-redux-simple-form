import { ADD_TO_LIST } from "../actions/types";

export const formReducers = ( state = {userList: JSON.parse(localStorage.getItem("userList") || "[]") },action) => {
  console.log(action.payload)
  switch (action.type) {
    case ADD_TO_LIST:
      return { userList: action.payload.userList };
    default:
      return state;
  }
};

