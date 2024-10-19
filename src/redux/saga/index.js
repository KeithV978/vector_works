import * as ACTION from "../constants";
import { takeLatest } from "redux-saga/effects";
import authSaga from "./authSaga";

function* rootSaga() {
  yield takeLatest(
    [
      ACTION.SIGNIN,
      ACTION.SIGNIN_SUCCESS,
      ACTION.SIGNUP,
      ACTION.AUTH_FAILURE,
      ACTION.SIGNUP_SUCCESS,
      ACTION.SIGNOUT,
    ],
    authSaga
  );
  //   yield takeLatest([

  //   ],projectSaga);
}
export default rootSaga;
