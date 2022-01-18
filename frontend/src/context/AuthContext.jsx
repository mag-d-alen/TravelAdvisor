/** @format */

import { createContext } from 'react';

const AuthContext = createContext({
    savedCountriesArray: [],
    setSavedCountriesArray: () => {}
});

export default AuthContext;
