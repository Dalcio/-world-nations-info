import { API_ENDPOINT } from 'constants/env';
import { TCountry } from 'rest-countries';

const getCountryData = async (name: string): Promise<TCountry> => {
  try {
    const res = await fetch(`${API_ENDPOINT}name/${name}`);
    const country: TCountry | TCountry[] = await res.json();

    return Array.isArray(country) ? country[0] : country;
  } catch (error) {
    throw new Error('country not found');
  }
};

export default getCountryData;
