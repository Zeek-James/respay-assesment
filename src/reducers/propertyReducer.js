import { GET_PROPERTIES } from "../action/actionTypes";

const initialState = [];

const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTIES:
      return action.payload;

    default:
      return state;
  }
};

export default propertiesReducer;
