import { createStore } from "redux";

const todos = [];

export const reducer = (state = todos, action) => {
  switch (action.type) {
    case "addTask":
      return [...state, action.payload];
    case "removeTask":
      return state.filter((item) => action.payload !== item.id);
    default:
      return state;
  }
};

// actions

export const taskAdded = (userInput) => {
  return {
    type: "addTask",
    payload: {
      title: userInput,
      id: Math.random().toString(36),
      status: true,
    },
  };
};

export const taskRemoved = (id) => {
  return {
    type: "removeTask",
    payload: id,
  };
};

export const store = createStore(reducer);
