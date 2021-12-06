import { all, fork, call, takeEvery, put } from "redux-saga/effects";
import { apiPath } from "../../pages/api/commonPath";
import { UNIVERSITY_DATA } from "../actions";
import { universitySuccessAction, universityErrorAction } from "./actions";
import axios from "axios";

const universityDataAsync = async (payload) =>
  await axios
    .get(apiPath + `/api/v1/colleges`)
    .then((res) => {
      console.log("resvghgjhk", res);
      return res.data.items;
    })
    .catch((error) => {
      return error;
    });
function* fetchUniversityData({ payload }) {
  try {
    const university = yield call(universityDataAsync, payload);
    console.log("university", university);
    yield put(universitySuccessAction(university));
  } catch (error) {
    console.log("Error::::", error);
    yield put(universityErrorAction(error));
  }
}
export function* universityData() {
  yield takeEvery(UNIVERSITY_DATA, fetchUniversityData);
}
export default function* rootSaga() {
  yield all([fork(universityData)]);
}
