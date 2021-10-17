import { Country } from 'types/Country';

/* --- STATE --- */
export interface CountryDetailState {
  isLoading: boolean;
  error?: string;
  countryDetail: Country;
}
