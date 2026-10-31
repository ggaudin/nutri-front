import { useAuth } from "../../context/AuthContext";

const AccueilDiet = () => {

    const { user } = useAuth();

    return (
        <div>
            <h1>Informations personnelles</h1>
            
        </div>
    );

}

export default AccueilDiet