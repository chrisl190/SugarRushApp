import React, { useContext, useState } from "react";

const AuthenticatedContext = React.createContext();

export function useAuthenticatedContext() {
    return useContext(AuthenticatedContext);
}

export function AuthenticatedProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(true);
    return (
        <AuthenticatedContext.Provider value={[authenticated, setAuthenticated]}>
            {children}
        </AuthenticatedContext.Provider>
    );
}