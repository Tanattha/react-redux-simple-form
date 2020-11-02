import { ADD_TO_LIST, CLEAR_LIST } from "../actions/types";

export const addToList = (user) => {
    return {
      type: ADD_TO_LIST,
      payload: { user },
    };
};

export const clearList = () => {
  const newList = [];
  return {
    type: CLEAR_LIST,
    payload: { newList },
  };
};
