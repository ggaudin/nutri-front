import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../api/authService";
import { useAuth } from "../../context/AuthContext";

const PageConnexion = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const {login} = useAuth();

    const handleLogin = async (event) => {
        event.preventDefault();
        setError("");
        const loginRequest = {
            email,
            password
        };
        try {
            const user = await login(loginRequest);
            
            if(user.role === "PATIENT"){
                navigate("/profil-patient");
            } else if(user.role === "DIETETICIEN"){
                navigate("/profil-diet");
            }
            
        } catch (apiError) {
            console.log(apiError);
            setError("Email ou mot de passe incorrect.");
        }
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h1>Connexion</h1>
                {error && <p>{error}</p>}
                <label htmlFor="mail">E-mail</label><br/>
                <input type="email" id="mail" value={email} onChange={(e) => setEmail(e.target.value)}/><br/><br/>
                <label htmlFor="password">Mot de passe</label><br/>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/><br/>
                <input type="submit" value="Se connecter"/>
            </form>
        </div>
    );

}

export default PageConnexion



