import { createAction } from '@reduxjs/toolkit';

const fetchCountryDetail = createAction('FETCH_COUNTRY_DETAIL_REQUEST',
  id => {
    return {
      payload: {
        id,
      },
    };
  },
);

const fetchCountryDetailSuccess = createAction(
  'FETCH_COUNTRY_DETAIL_SUCCESS',
  countryDetail => {
    return {
      payload: {
        countryDetail,
      },
    };
  },
);

const fetchCountryDetailError = createAction('FETCH_COUNTRY_DETAIL_ERROR', error => {
  return {
    payload: {
      error,
    },
  };
});

export const actions = {
  fetchCountryDetail,
  fetchCountryDetailSuccess,
  fetchCountryDetailError,
};
