import { useState } from "react";
import { login } from "../../api/authService";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../api/authService";

const PageConnexion = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        setError("");
        const loginRequest = {
            email,
            password
        };
        try {
            const authResponse = await login(loginRequest);
            const token = authResponse.data.token;
            localStorage.setItem("token", token);
            const userResponse = await getCurrentUser();
            console.log(userResponse.data);
            navigate("/accueil");
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
                <input type="email" id="mail" placeholder = "E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/><br/><br/>
                <label htmlFor="password">Mot de passe</label><br/>
                <input type="password" id="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)}/><br/><br/>
                <input type="submit" value="Se connecter"/>
            </form>
        </div>
    );

}

export default PageConnexion



