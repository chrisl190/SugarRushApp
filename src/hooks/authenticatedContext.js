import React, {useContext, useState, createContext} from 'react';

const AuthenticatedContext = createContext();

export function useAuthenticatedContext() {
  return useContext(AuthenticatedContext);
}

export function AuthenticatedProvider({children}) {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <AuthenticatedContext.Provider value={[authenticated, setAuthenticated]}>
      {children}
    </AuthenticatedContext.Provider>
  );
}
