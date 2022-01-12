import { GET_PROPERTIES } from "../action/actionTypes";

const initialState = {
  properties: [],
  isloading: true,
};

const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTIES:
      return {
        ...state,
        properties: action.payload,
        isloading: false,
      };

    default:
      return state;
  }
};

export default propertiesReducer;
