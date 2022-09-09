import { TCountry } from 'rest-countries';

export type TSortByName = 'Ascending' | 'Descending';
export type TFilterByRegion = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';

export type TStoreState = {
  currentRegion: TFilterByRegion | undefined;
  currentSearch: string | undefined;
  countries: TCountry[];
  filteredCountries: TCountry[];
  selectedCountry: TCountry | undefined;
};

export type TStoreActions = {
  filterByRegion: (name?: TFilterByRegion, withReturn?: boolean) => TCountry[];
  searchCountry: (name: string, withReturn?: boolean) => TCountry[];
  hydrateStore: (countries: TCountry[]) => void;
};

export type TStore = TStoreState & TStoreActions;
