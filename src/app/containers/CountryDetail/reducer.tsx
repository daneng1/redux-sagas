import { createReducer } from '@reduxjs/toolkit';
import { CountryDetailState } from './types';

export const key = 'countries';

export const initialState: CountryDetailState = {
  countryDetail: [],
  error: undefined,
  isLoading: false,
};

export const countriesReducer = createReducer(initialState, {
  FETCH_COUNTRIES_REQUEST: (state, action) => {
    state.isLoading = true;
  },
  FETCH_COUNTRIES_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.countryDetail = action.payload.countries;
  },
  FETCH_COUNTRIES_ERROR: (state, action) => {
    state.isLoading = false;
    state.error = action.payload.error;
  },
});
