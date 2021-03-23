import { COMPARE_ADD_ITEM } from "../constants/compareConstants";

export const compareListReducer = (state = { compareItems: [] }, action) => {
  switch (action.type) {
    case COMPARE_ADD_ITEM:
      const item = action.payload;
      return { ...state, compareItems: [...state.compareItems, item] };
    default:
      return state;
  }
};
