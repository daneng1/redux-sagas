import { createReducer } from '@reduxjs/toolkit';
import { CountryDetailState } from './types';

export const key = 'countryDetail';

export const initialState: CountryDetailState = {
    // I had to specify the properties of countryDetails here, otherwise the properties were missing from type Country
  countryDetail: { name: '', currency_code: '', id: '' },
  error: undefined,
  isLoading: false,
};

export const countryDetailReducer = createReducer(initialState, {
  FETCH_COUNTRY_DETAIL_REQUEST: (state, action) => {
    state.isLoading = true;
  },
  FETCH_COUNTRY_DETAIL_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.countryDetail = action.payload.countryDetail;
  },
  FETCH_COUNTRY_DETAIL_ERROR: (state, action) => {
    state.isLoading = false;
    state.error = action.payload.error;
  },
});
