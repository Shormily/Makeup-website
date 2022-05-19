import React, { createContext } from 'react';
import useFiresbase from '../Hook/useFiresbase';

 export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    // const {children} =props;
    const allContext = useFiresbase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;