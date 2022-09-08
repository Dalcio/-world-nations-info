import { TCountry } from 'rest-countries';

export type TStoreState = {
  countries: TCountry[];
  filteredCountries: TCountry[];
  selectedCountry: TCountry | undefined;
};

export type TStoreActions = {
  searchCountry: (name: string) => void;
  hydrateStore: (countries: TCountry[]) => void;
};

export type TStore = TStoreState & TStoreActions;
