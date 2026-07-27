import { useAuth } from "../../context/AuthContext";

const AccueilDiet = () => {

    const { user } = useAuth();

    return (
    <div>
        <h1>Accueil Diet</h1><br/>
        <h1>Bienvenue { user.prenom }</h1>
    </div>
    );

}

export default AccueilDiet