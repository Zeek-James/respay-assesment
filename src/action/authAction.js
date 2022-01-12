import axios from "axios";
import { LOGIN } from "./actionTypes";

export const login = () => async (dispatch) => {
  const base_URL = "https://demo.respay.com/api/api/auth/signin";

  const username = "zgamomv@tmtdoeh.com";

  const password = "aA11@@";
  const data = { username, password };

  try {
    const res = await axios.post(base_URL, data);
    const info = res.data;
    dispatch({
      type: LOGIN,
      payload: info.data,
    });
  } catch (err) {
    alert("invalid details");
  }
};
