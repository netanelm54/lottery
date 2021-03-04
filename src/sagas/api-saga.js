import { call, takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { createAction } from "redux-actions";

const API_BASE_URL = "http://localhost:5000/";
const defaultNextType = {
  pending: "REQUEST_PENDING",
  success: "REQUEST_SUCCESS",
  error: "REQUEST_ERROR",
};

const callApi = async (url, method, config = {}) => {
  try {
    const res = await axios({
      method,
      url,
      ...config,
    });
    return res;
  } catch (e) {
    return e?.response;
  }
};

function* fetchData(action) {
  const nextType = action.payload.nextActionType || defaultNextType;
  try {
    yield put(
      createAction(
        nextType.pending,
        () => action,
        () => action.meta
      )()
    );

    const fetchResult = yield call(
      callApi,
      `${API_BASE_URL}${action.payload.url}`,
      action.payload.method || "get",
      {
        data: action.payload.data,
      }
    );
    if (
      !fetchResult?.data ||
      !fetchResult?.data?.errors ||
      fetchResult?.data?.errors?.errorCode === 0
    ) {
      yield put(
        createAction(
          nextType.success,
          () => fetchResult.data,
          () => action.meta
        )(fetchResult.data)
      );
    } else {
      throw fetchResult;
    }
  } catch (e) {
    yield put(
      createAction(
        nextType.error,
        () => e,
        () => action.meta
      )(e)
    );
  }
}

export default function* apiSaga() {
  yield takeEvery("API_REQUEST", fetchData);
}
