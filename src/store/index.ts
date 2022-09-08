import create from 'zustand';
import { combine, devtools, persist } from 'zustand/middleware';
import { APP_NAME } from 'constants/env';
import { useEffect } from 'react';
import { TCountry } from 'rest-countries';
import storeActions from './store.actions';
import { TStoreState, TStoreActions, TStore } from './store.types';

const storeState: TStoreState = {
  countries: [],
  filteredCountries: [],
  selectedCountry: undefined,
};

let store = combine<TStoreState, TStoreActions, any, any>(storeState, storeActions);

store = persist(store, {
  name: APP_NAME,
});
store = devtools(store, {
  name: APP_NAME,
});

const useStore = create<TStore>(store);

export const useHydrateStore = (countries?: TCountry[]) => {
  const hydrateStore = useStore((s) => s.hydrateStore);

  useEffect(() => {
    if (countries && countries.length > 0) {
      hydrateStore(countries);
    }
  }, []);
};

export default useStore;
