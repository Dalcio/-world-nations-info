import create from 'zustand';
import { combine, devtools, persist } from 'zustand/middleware';
import { APP_NAME } from 'constants/env';
import { useEffect } from 'react';
import { TCountry } from 'rest-countries';
import storeActions from './store.actions';
import { TStoreActions, TStore } from './store.types';

const storeInit: TStore = {
  currentRegion: undefined,
  currentSearch: undefined,
  countries: [],
  country: undefined,
  filteredCountries: [],
  selectedCountry: undefined,
  filterByRegion: () => [],
  hydrateStore: () => undefined,
  searchCountry: () => [],
  getCountry: () => undefined,
};

let store = combine<TStore, TStoreActions, any, any>(storeInit, storeActions);

store = persist(store, {
  name: APP_NAME,
});
store = devtools(store, {
  name: APP_NAME,
});

const useStore = create<TStore>(store);

export const useHydrateStore = (countries?: TCountry[]) => {
  const hydrateStore = useStore((s) => s.hydrateStore);
  const c = useStore((s) => s.countries);

  useEffect(() => {
    if (c.length === 0 && countries && countries.length > 0) {
      hydrateStore(countries);
    }
  }, []);
};

export default useStore;
