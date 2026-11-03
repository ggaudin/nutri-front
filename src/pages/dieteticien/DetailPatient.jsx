import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProfilPatient, getListePlansAlimentaires } from "../../api/dieteticienService";
import { formaterDate, calculerAge } from "../../utils/dateUtils";

const DetailPatient = () => {

    const { patientId } = useParams();
    const [donneesPatient, setDonneesPatient] = useState("");
    const [plansAlimentaires, setPlansAlimentaires] = useState("");
    const [erreur, setErreur] = useState("");
    const [chargementPatient, setChargementPatient] = useState(true);
    const [chargementPlans, setChargementPlans] = useState(true);


    useEffect(() => {

        const chargerDonneesPatient = async () => {
            try {
                const response = await getProfilPatient(patientId);
                setDonneesPatient(response.data);
            } catch (erreur) {
                setErreur("Impossible de récupérer les données du patient.");
            } finally {
                setChargementPatient(false);
            }
        };

        const chargerPlansAlimentaires = async () => {
            try {
                const response = await getListePlansAlimentaires(patientId);
                setPlansAlimentaires(response.data);
            } catch (erreur) {
                setErreur("Impossible de récupérer les plans alimentaires du patient.");
            } finally {
                setChargementPlans(false);
            }
        };

        chargerDonneesPatient();
        chargerPlansAlimentaires();

    }, []);

    if (chargementPatient) {
        return <p>Chargement des données du patient...</p>;
    }
    if (chargementPlans) {
        return <p>Chargement des plans alimentaires...</p>;
    }

    if (erreur) {
        return <p>{erreur}</p>;
    }


    return (
        <div>
            <h1>{donneesPatient.prenom} {donneesPatient.nom}</h1>
            <h2>Informations personnelles</h2>
            <p>Email : {donneesPatient.email}</p>
            <p>Date de naissance : {formaterDate(donneesPatient.dateNaissance)}</p>
            <p>Âge : {calculerAge(donneesPatient.dateNaissance)}</p>
            <h2>Mensurations et activité physique</h2>
            <p>Taille : {donneesPatient.taille} m</p>
            <p>Poids : {donneesPatient.poids} kg</p>
            <p>Niveau d'activité physique (NAP) : {donneesPatient.nap}</p>
            <h2>Plans Alimentaires</h2>
            <ul>
            {plansAlimentaires.map((plan) => (
                <li key={plan.id}>
                    <Link to={`/diet/patients/${patientId}/palim/${plan.id}`}>
                        {plan.nom}
                    </Link>
                </li>
            ))}
        </ul>

        </div>
    );

}

export default DetailPatient;