import { call, put } from "redux-saga/effects";
import axios from "axios";
import { SIGNIN, SIGNOUT, SIGNUP, SIGNUP_SUCCESS } from "../constants";
import { SERVER_URL } from "../../utils/links";
import { signinSuccess } from "../slices/authSlice";
// import {
//   signupRequest,
//   signupSuccess,
//   signupFailure,
//   signinRequest,
//   signinSuccess,
//   signinFailure,
//   signout,
// } from "../slices/authSlice";

export function* handleError(error) {
  switch (error) {
    case "request-timed-out":
      yield put({ type: "auth/authFailure", payload: "Request Timed Out" });
      break;

    default:
      break;
  }
}

export function* authSaga({ type, payload }) {
  // console.log(type);
  switch (type) {
    case SIGNUP:
      try {
        const timer = yield setTimeout(() => {
          handleError("request-timed-out");
        }, 15000);
        const response = yield axios.post(`${SERVER_URL}/signup`, payload);
        // console.log(response);
        if (response.data.message) {
          yield put({ type: SIGNUP_SUCCESS, payload: response.data.message });
          clearTimeout(timer);
        }
      } catch (error) {
        yield call(handleError, error);
      }
      break;
    case SIGNIN:
      try {
        // console.log(payload);
        const response = yield axios.post(`${SERVER_URL}/signin`, payload);
        // console.log(response.data);
        if (response.data.id) {
          yield put(signinSuccess(response.data));
        }
      } catch (error) {
        yield call(handleError, error);
      }
      break;
    case SIGNOUT:
      break;
    default:
      break;
  }
  // try{
  //     const response = yield call();
  // }
}
export default authSaga;
