import { ADD_TO_LIST, CLEAR_LIST } from "../actions/types";
import produce from "immer";

export const formReducers = (
  state = { userList: JSON.parse(localStorage.getItem("userList") || "[]") },
  action
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_TO_LIST: {
        const { user } = action.payload;
        let alreadyExists = false;
        draft.userList.forEach((el) => {
          if (el.email === user.email) {
            alreadyExists = true;
            alert("This email is already taken, please change");
          }
        });
        if (!alreadyExists) {
          draft.userList.push(user);
          localStorage.setItem("userList", JSON.stringify(draft.userList));
        }
        return draft;
      }

      case CLEAR_LIST: {
        const { newList } = action.payload;        
        draft.userList = newList;
        return draft;
      }
      default:
        return draft;
    }
  });
