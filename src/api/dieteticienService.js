import api from "./axios";

export const getListePatients = () => {
    return api.get("/diet/patients");
};