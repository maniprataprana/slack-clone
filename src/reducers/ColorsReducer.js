import * as actionTypes from "../actions/types";

const initialColorState = {
  primaryColor: "#4c3c4c",
  secondaryColor: "#eee"
};

const ColorsReducer = (state = initialColorState, action) => {
  switch (action.type) {
    case actionTypes.SET_COLORS:
      return {
        primaryColor: action.payload.primaryColor,
        secondaryColor: action.payload.secondaryColor
      };

    default:
      return state;
  }
};

export default ColorsReducer;
