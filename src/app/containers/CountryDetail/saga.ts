import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { actions } from './actions';

export function* fetchCountries() {
  // TODO: add id dynamically, need to find a way to pass it from the Countries component
  // const id = '';
  const requestURL = `https://api.carerev.com/api/v1/country/4040f18e-84e2-4322-b41f-b2160c594406`;

  try {
    const { countries } = yield call(request, requestURL);

    if (countries?.length > 0) {
      yield put(actions.fetchCountryDetailSuccess(countries));
    } else {
      yield put(actions.fetchCountryDetailError('No countries found.'));
    }
  } catch (err) {
    yield put(actions.fetchCountryDetailError(err.toString()));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* saga() {
  yield takeLatest(actions.fetchCountryDetail.type, fetchCountryDetail);
}
