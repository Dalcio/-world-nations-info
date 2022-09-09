import { API_ENDPOINT } from 'constants/env';
import { TCountry } from 'rest-countries';

const getAllCountries = async (): Promise<TCountry[]> => {
  let countries: TCountry[] = [];

  try {
    const res = await fetch(`${API_ENDPOINT}all`);
    countries = await res.json();
  } catch (error) {
    countries = [];
  }

  return countries;
};

export default getAllCountries;
