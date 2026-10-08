import React, {createContext,  useState} from 'react';
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    function loggingIn() {
        console.log("User has logged in!");
        toggleIsAuthenticated(true);
        navigate('/profile');
    }

    function loggingOut() {
        console.log("User has logged out!");
        toggleIsAuthenticated(false);
        navigate('/');
    }

    const data = {
        isAuth: isAuthenticated,
        login: loggingIn,
        logout: loggingOut,
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;