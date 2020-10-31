import { ADD_TO_LIST, CLEAR_LIST } from "../actions/types";
import store from "../store";

export const addToList = (user) => {
  const userList = store.getState().form.userList;
  let alreadyExists = false;
  userList.forEach((el) => {
    if (el.email === user.email) {
      alreadyExists = true;
      alert("This email is already taken, please change");
    }
  });
  if (!alreadyExists) {
    userList.push({ ...user });
    localStorage.setItem("userList", JSON.stringify(userList));
  }
  return {
    type: ADD_TO_LIST,
    payload: { userList },
  };
};

export const clearList = () => {
  const userList = [];
  localStorage.setItem("userList", JSON.stringify(userList));

  return {
    type: CLEAR_LIST,
    payload: { userList },
  };
};
