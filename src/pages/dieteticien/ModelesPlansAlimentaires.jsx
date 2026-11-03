import { useAuth } from "../../context/AuthContext";

const ModelesPlansAlimentaires = () => {

    const { user } = useAuth();

    return (
        <div>
            <h1>Mes plans alimentaires</h1>
            
        </div>
    );

}

export default ModelesPlansAlimentaires