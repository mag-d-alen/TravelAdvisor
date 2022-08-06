/** @format */

import { createContext } from 'react';

export const AuthContext = createContext({
  savedCountriesArray: [],
  setSavedCountriesArray: () => {},
});
