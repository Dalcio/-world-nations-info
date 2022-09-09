import { NativeName, Currencies, Languages } from 'rest-countries';

export const getNativeName = (nativeName: NativeName) => {
  const names: string[] = [];
  Object.keys(nativeName).forEach((key) => {
    names.push(nativeName[key].common);
  });
  return names.join(',');
};

export const getCurrencies = (objCurrencies: Currencies) => {
  const currencies: string[] = [];
  Object.keys(objCurrencies).forEach((key) => {
    currencies.push(objCurrencies[key].name);
  });
  return currencies.join(',');
};

export const getLanguages = (objLanguages: Languages) => {
  const currencies: string[] = [];
  Object.keys(objLanguages).forEach((key) => {
    currencies.push(objLanguages[key]);
  });
  return currencies.join(',');
};
