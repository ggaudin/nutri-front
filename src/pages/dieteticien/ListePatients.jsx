import { useState, useEffect } from "react";
import { getListePatients } from "../../api/dieteticienService";
import { Link } from "react-router-dom";

const ListePatients = () => {

    const [patients, setPatients] = useState([]);
    const [erreur, setErreur] = useState("");
    const [chargement, setChargement] = useState(true);

    useEffect(() => {

        const chargerPatients = async () => {
            try {
                const response = await getListePatients();
                setPatients(response.data);
            } catch (erreur) {
                setErreur("Impossible de récupérer les patients.");
            } finally {
                setChargement(false);
            }
        };

        chargerPatients();

    }, []);

    if (chargement) {
        return <p>Chargement des patients...</p>;
    }

    if (erreur) {
        return <p>{erreur}</p>;
    }

    if (patients.length === 0) {
        return <p>Aucun patient pour le moment.</p>;
    }

    return (
        <ul>
            {patients.map((patient) => (
                <li key={patient.id}>
                    <Link to={`/diet/patients/${patient.id}`}>
                        {patient.prenom} {patient.nom}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default ListePatients;