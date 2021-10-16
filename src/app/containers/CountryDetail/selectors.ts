import { createSelector } from '@reduxjs/toolkit';
import { CountryDetailsState } from './types';
import { RootState } from 'types';
import { initialState } from './reducer';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.countryDetail || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  countryDetailState => countryDetailState.isLoading,
);

export const selectError = createSelector(
  [selectDomain],
  countryDetailState => countryDetailState.error,
);

export const selectCountries = createSelector(
  [selectDomain],
  (countryDetailState: CountryDetailsState) => countryDetailState.countries,
);
