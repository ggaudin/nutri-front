import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import PageAccueil from "../pages/PageAccueil";
import PageConnexion from "../pages/auth/PageConnexion";
import PageInscription from "../pages/auth/PageInscription";

import AccueilPatient from "../pages/patient/AccueilPatient";
import AccueilDiet from "../pages/dieteticien/AccueilDiet";
import AccesInterdit from "../pages/AccesInterdit";

const AppRouter = () => {

    return (

        <Routes>

            {/* Pages publiques */}

            <Route path="/" element={<PageAccueil />} />
            <Route path="/accueil" element={<PageAccueil />} />
            <Route path="/connexion" element={<PageConnexion />} />
            <Route path="/inscription" element={<PageInscription />} />
            <Route path="/acces-interdit" element={<AccesInterdit />} />

            Pages protégées

            <Route
                path="/profil-patient"
                element={
                    <ProtectedRoute roles={["PATIENT"]}>
                        <AccueilPatient />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/profil-diet"
                element={
                    <ProtectedRoute roles={["DIETETICIEN"]}>
                        <AccueilDiet />
                    </ProtectedRoute>
                }
            />

        </Routes>

    );

};

export default AppRouter;