import api from "./axios";

export const login = (loginRequest) => {
    return api.post("/auth/connexion", loginRequest);
};

export const register = (registerRequest) => {
    return api.post("/auth/inscription", registerRequest);
};

export const getCurrentUser = () => {
    return api.get("/auth/me");
};