import { TCountry } from 'rest-countries';
import { StateCreator } from 'zustand';
import { TStore, TStoreActions } from './store.types';

const storeActions: StateCreator<TStore, any, any, TStoreActions> = (set, get) => ({
  hydrateStore: (countries) => {
    set({ countries });
  },
  searchCountry: (name, withReturn = false) => {
    const { countries, currentRegion, filterByRegion } = get();
    let searchedCountries: TCountry[] = [];

    if (name) {
      if (currentRegion && !withReturn) {
        searchedCountries = filterByRegion(currentRegion, true);

        searchedCountries = searchedCountries.filter(({ name: { common } }) =>
          common.toLowerCase().includes(name.toLowerCase())
        );
      } else {
        searchedCountries = [...countries].filter(({ name: { common } }) =>
          common.toLowerCase().includes(name.toLowerCase())
        );
      }
    } else if (currentRegion) {
      searchedCountries = filterByRegion(currentRegion, true);
    }

    set({ filteredCountries: searchedCountries, currentSearch: name });

    return searchedCountries;
  },
  filterByRegion: (name, withReturn = false) => {
    const { countries, currentSearch, searchCountry } = get();
    let filteredCountries: TCountry[] = [];

    if (name) {
      if (currentSearch !== undefined && !withReturn) {
        filteredCountries = searchCountry(currentSearch, true);
        filteredCountries = filteredCountries.filter(
          ({ region }) => region.toLowerCase() === name.toLowerCase()
        );
      } else {
        filteredCountries = [...countries].filter(
          ({ region }) => region.toLowerCase() === name.toLowerCase()
        );
      }
    } else if (currentSearch) {
      filteredCountries = searchCountry(currentSearch, true);
    }

    set({ filteredCountries, currentRegion: name });

    return filteredCountries;
  },
});

export default storeActions;
