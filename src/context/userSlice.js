// reducers/exampleReducer.js
const initialState = {
  data: [],
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default exampleReducer;
