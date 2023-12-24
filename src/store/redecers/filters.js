import { SET_FILTERS } from "../actionTypes/filters";

function filters(state = "all", { type, payload }) {
  switch (type) {
    case SET_FILTERS:
      return payload;
  }
  return state;
}

export default filters;
