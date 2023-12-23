import { CHANGE_DONE, DEL_TODO } from "../actionTypes/todos";

const initState = [
  { id: 1, name: "干饭", done: false },
  { id: 2, name: "学习", done: false },
  { id: 3, name: "休息", done: false },
];

function todos(state = initState, actions) {
  switch (actions.type) {
    case DEL_TODO:
      return state.filter((item) => item.id !== actions.payload);
    case CHANGE_DONE:
      return state.map((item) => {
        if (item.id === actions.payload) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      });
  }
  return state;
}

export default todos;
