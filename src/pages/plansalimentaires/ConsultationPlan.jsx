import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPlanAlimentaire } from "../../api/dieteticienService";

const ConsultationPlan = () => {

    const { planId } = useParams();
    const [planAlimentaire, setPlanAlimentaire] = useState("");
    const [erreur, setErreur] = useState("");
    const [chargement, setChargement] = useState(true);

    useEffect(() => {
        const chargerPlanAlimentaire = async () => {
            try {
                const response = await getPlanAlimentaire(planId);
                setPlanAlimentaire(response.data);
            } catch (erreur) {
                setErreur("Impossible de récupérer le plan alimentaire.");
            } finally {
                setChargement(false);
            }
        };

        chargerPlanAlimentaire();

    }, []);

    if (chargement) {
        return <p>Chargement du plan alimentaire...</p>;
    }

    if (erreur) {
        return <p>{erreur}</p>;
    }

    const repasTries = [...planAlimentaire.repas].sort((a, b) => a.rang - b.rang);

    return (
        <div>
            <h1>{planAlimentaire.nom}</h1>
            <ul>
            {repasTries.map((repas) => (
                <li key={repas.id}>
                    <h3>{repas.nom}</h3>
                    
                    <ul>
                        {repas.composantsRepas.map((composant) => (
                            <li key={composant.id}>
                                {composant.quantite} {composant.nom}
                            </li>
                        ))}
                    </ul>

                </li>
            ))}
        </ul>

        <h2>Valeurs nutritionnelles totales</h2>
            <p>Protéines : {planAlimentaire.proteinesTot} g</p>
            <p>Lipides : {planAlimentaire.lipidesTot} g</p>
            <p>Glucides : {planAlimentaire.glucidesTot} g</p>
            <p>Énergie : {planAlimentaire.energieTot} kcal</p>

        </div>
    );

}

export default ConsultationPlan