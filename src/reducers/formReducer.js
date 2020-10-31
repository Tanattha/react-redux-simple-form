import { ADD_TO_LIST, CLEAR_LIST } from "../actions/types";

export const formReducers = (
  state = { userList: JSON.parse(localStorage.getItem("userList") || "[]") },
  action
) => {
  switch (action.type) {
    case ADD_TO_LIST:
      return { userList: action.payload.userList };
    case CLEAR_LIST:
      return { userList: action.payload.userList};
    default:
      return state;
  }
};
