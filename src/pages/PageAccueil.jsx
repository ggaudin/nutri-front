import { useNavigate } from "react-router-dom";

const PageAccueil = () => {

    const navigate = useNavigate();

    const afficherConnexion = () => {
        navigate("/connexion");
    }

    const afficherInscription = () => {
        navigate("/inscription");
    }

    return (
    <div>
        <h1>Bienvenue sur Nutri</h1><br/>
        <div>
            <button onClick={afficherConnexion}>Connexion</button>
            <button onClick={afficherInscription}>Inscription</button>
        </div>
    </div>
    );

}

export default PageAccueil