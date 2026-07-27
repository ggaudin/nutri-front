import { createContext, useContext, useEffect, useState } from "react";
import { login as loginApi, getCurrentUser } from "../api/authService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Recharge les informations de l'utilisateur connecté
    const refreshUser = async () => {
        try {
            const response = await getCurrentUser();
            setUser(response.data);
            return response.data;
        } catch (error) {
            localStorage.removeItem("token");
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    // Connexion
    const login = async (loginRequest) => {
        const authResponse = await loginApi(loginRequest);
        const token = authResponse.data.token;
        localStorage.setItem("token", token);
        const user = await refreshUser();
        return user;
    };

    // Déconnexion
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    // Au démarrage de l'application
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            refreshUser();
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
                refreshUser
            }}
        >
            {children}
        </AuthContext.Provider>

    );
}

export function useAuth() {
    return useContext(AuthContext);
}