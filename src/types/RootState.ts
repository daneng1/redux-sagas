import { CountriesState } from 'app/containers/Countries/types';
import { CountryDetailState } from 'app/containers/CountryDetail/types';
import { ThemeState } from 'styles/theme/types';

export interface RootState {
  theme?: ThemeState;
  countries?: CountriesState;
  countryDetail?: CountryDetailState;
}
