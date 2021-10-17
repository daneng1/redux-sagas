import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { actions } from './actions';

export function* fetchCountryDetail(action: any) {

  //Add id dynamically through Action payload, had to hard code it before getting this to work
  const id = action.payload.id;
  const requestURL = `https://api.carerev.com/api/v1/countries/${id}`;

  try {
    const data = yield call(request, requestURL);

    if (data) {
      yield put(actions.fetchCountryDetailSuccess(data));
    } else {
      yield put(actions.fetchCountryDetailError('No country details found.'));
    }
  } catch (err: any) {
    yield put(actions.fetchCountryDetailError(err.toString()));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* saga() {
  yield takeLatest(actions.fetchCountryDetail.type, fetchCountryDetail);
}
