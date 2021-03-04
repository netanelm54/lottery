import { fork } from "redux-saga/effects";
import apiSaga from "./api-saga";

export default function* rootSaga() {
  yield fork(apiSaga);
}
