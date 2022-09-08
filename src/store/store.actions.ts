import { API_ENDPOINT } from 'constants/env';
import { StateCreator } from 'zustand';
import { TStoreActions, TStoreState } from './store.types';

const storeActions: StateCreator<TStoreState, any, any, TStoreActions> = (set, get) => ({
  hydrateStore(countries) {
    set({ countries });
  },
  async searchCountry(name) {
    let res;

    if (name.length > 0) {
      res = await fetch(`${API_ENDPOINT}name/${name}`);
    } else {
      res = await fetch(`${API_ENDPOINT}all`);
    }

    const countries = await res.json();

    if (countries) {
      set({ countries });
    }
  },
});

export default storeActions;
