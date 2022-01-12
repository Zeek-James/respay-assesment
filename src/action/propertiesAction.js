import { GET_PROPERTIES } from "./actionTypes";
import axios from "axios";

export const getProperties = () => async (dispatch, getState) => {
  const token = getState().authReducer.token;

  const baseUrl = "https://demo.respay.com/api";

  const fetchProps = await axios(`${baseUrl}/api/properties`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const res = fetchProps.data;
  const payload = res.data;
  dispatch({
    type: GET_PROPERTIES,
    payload,
  });
};
