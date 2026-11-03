import api from "./axios";

export const getListePatients = () => {
    return api.get("/diet/patients");
};

export const getProfilPatient = (patientId) => {
    return api.get(`/diet/patients/${patientId}`);
};

export const getListePlansAlimentaires = (patientId) => {
    return api.get(`/diet/patients/${patientId}/palim`);
};

export const getBesoinsPatient = (patientId) => {
    return api.get(`/diet/patients/${patientId}/besoins`);
};

export const getPlanAlimentaire = (planId) => {
    return api.get(`/palim/${planId}`);
};
