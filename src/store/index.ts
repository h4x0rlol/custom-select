import { combineReducers, createStore } from "redux";

const SELECT_ITEM = "SELECT_ITEM";

const defaultState = {
  selectedItem: {},
};

function selectReducer(state = defaultState, action) {
  switch (action.type) {
    case SELECT_ITEM:
      const item = action.payload;
      return {
        ...state,
        selectedItem: item,
      };
    default:
      return state;
  }
}

export const selectItems = (action) => ({
  type: SELECT_ITEM,
  payload: action.payload,
});

const rootReducer = combineReducers({
  selectReducer,
});

export const store = createStore(rootReducer);

export type IRootState = ReturnType<typeof rootReducer>;
