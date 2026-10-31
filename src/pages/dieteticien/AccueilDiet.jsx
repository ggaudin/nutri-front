import { useAuth } from "../../context/AuthContext";

const AccueilDiet = () => {

    const { user } = useAuth();

    return (
        <div>
            <h1>Bonjour {user.prenom} ! (Diet)</h1>
            <p>Que voulez-vous faire aujourd'hui ?</p>
        </div>
    );

}

export default AccueilDiet