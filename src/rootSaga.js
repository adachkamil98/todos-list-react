import { all } from "redux-saga/effects";
import { tasksSaga } from "./features/tasks/tasksSaga";

export default function* rootSaga() {
  //tworzymy to by mieć mozliwośc korzystania z kilku sag w przyszłości
  yield all([tasksSaga(),]);
}
