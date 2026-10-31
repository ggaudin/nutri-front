import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import PageAccueil from "../pages/PageAccueil";
import PageConnexion from "../pages/auth/PageConnexion";
import PageInscription from "../pages/auth/PageInscription";
import AccesInterdit from "../pages/AccesInterdit";

import AccueilPatient from "../pages/patient/AccueilPatient";

import DietLayout from "../layouts/DietLayout";
import AccueilDiet from "../pages/dieteticien/AccueilDiet";
import ListePatients from "../pages/dieteticien/ListePatients";
import DetailPatient from "../pages/dieteticien/DetailPatient";
import ProfilDiet from "../pages/dieteticien/ProfilDiet";

const AppRouter = () => {

    return (

        <Routes>

            {/* Pages publiques */}

            <Route path="/" element={<PageAccueil />} />
            <Route path="/accueil" element={<PageAccueil />} />
            <Route path="/connexion" element={<PageConnexion />} />
            <Route path="/inscription" element={<PageInscription />} />
            <Route path="/acces-interdit" element={<AccesInterdit />} />

            {/*Pages protégées*/}

            <Route
                path="/profil-patient"
                element={
                    <ProtectedRoute roles={["PATIENT"]}>
                        <AccueilPatient />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/diet"
                element={
                    <ProtectedRoute roles={["DIETETICIEN"]}>
                        <DietLayout />
                    </ProtectedRoute>
                }
            >

                <Route index element={<AccueilDiet />} />
                <Route path="patients" element={<ListePatients />} />
                <Route
                    path="patients/:patientId"
                    element={<DetailPatient />}
                />
                <Route path="profil" element={<ProfilDiet />} />

            </Route>

        </Routes>

    );

}

export default AppRouter;