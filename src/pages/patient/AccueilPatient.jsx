import { useAuth } from "../../context/AuthContext";

const AccueilPatient = () => {

    const { user } = useAuth();

    return (
    <div>
        <h1>Accueil Patient</h1><br/>
        <h1>Bienvenue { user.prenom }</h1>
    </div>
    );

}

export default AccueilPatient