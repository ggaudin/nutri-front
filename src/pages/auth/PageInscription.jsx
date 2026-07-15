import { useState } from "react";
import { register } from "../../api/authService";
import { useNavigate } from "react-router-dom";

const PageInscription = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [dateDeNaissance, setDateDeNaissance] = useState("");
    const [role, setRole] = useState("");
    const [rpps, setRPPS] = useState("");
    const [genre, setGenre] = useState("");

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const passwordsMatch = confirmPassword === "" || password === confirmPassword;

    function champsPatient() {
        return (
            <>
            <label htmlFor="dateDeNaissance">Date de naissance</label><br/>
            <input id="dateDeNaissance" name="dateDeNaissance" type="date" value={dateDeNaissance} onChange={(e) => setDateDeNaissance(e.target.value)} /><br/><br/>
            
            <fieldset>
                <legend>Genre</legend>
                <label htmlFor="genreHomme">Homme</label><input id="genreHomme" type="radio" name="radioGenre" value="HOMME" checked={genre === 'HOMME'} onChange={(e) => setGenre(e.target.value)} required/>
		        <label htmlFor="genreFemme">Femme</label><input id="genreFemme" type="radio" name="radioGenre" value="FEMME" checked={genre === 'FEMME' } onChange={(e) => setGenre(e.target.value)} />  
            </fieldset>
            
            </>
        );
        }

        function champsDiet() {
        return (
            <>
            <label htmlFor="rpps">Numéro RPPS</label><br/>
            <input type="text" id="rpps" pattern="^[0-9]{11}$" maxLength={11} value={rpps} onChange={(e) => setRPPS(e.target.value)} required/>

            </>
        );
        }

    const handleRegister = async (event) => {
        event.preventDefault();
        setError("");
        const registerRequest = {
            nom,
            prenom,
            email,
            password,
            role
        };

        if (role === "PATIENT") {
            registerRequest.dateDeNaissance = dateDeNaissance;
            registerRequest.genre = genre;
        }

        if (role === "DIETETICIEN") {
            registerRequest.rpps = rpps;
        }

        console.log(registerRequest);
        try {
            await register(registerRequest);
            console.log("inscription OK");
            navigate("/accueil");
        } catch (apiError) {
            console.log(apiError);
            setError("Veuillez vérifier que tous les champs requis sont remplis.");
        }
    }

    return (
        <div>
            <form onSubmit={handleRegister}>
                <h1>Inscription</h1>
                {error && <p>{error}</p>}
                
                <label htmlFor="nom">Nom</label><br/>
                <input type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} required/><br/><br/>
                
                <label htmlFor="prenom">Prénom</label><br/>
                <input type="text" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required/><br/><br/>
                
                <label htmlFor="mail">E-mail</label><br/>
                <input type="email" id="mail" value={email} onChange={(e) => setEmail(e.target.value)} required/><br/><br/>
                
                <label htmlFor="password">Mot de passe</label><br/>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/><br/><br/>
                <label htmlFor="confirmPassword">Confirmez le mot de passe</label><br/>
                <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/><br/>
                
                {!passwordsMatch && (<p>Les mots de passe ne correspondent pas.</p>)}

                <br/>

                <fieldset>
                    <legend>Vous êtes :</legend>
                    <label htmlFor="roleDiet">Diététicien<input id="roleDiet" type="radio" name="role" value="DIETETICIEN" checked={role === 'DIETETICIEN'} onChange={(e) => setRole(e.target.value)} required/></label>
                    <label htmlFor="rolePatient">Patient<input id="rolePatient" type="radio" name="role" value="PATIENT" checked={role === 'PATIENT'} onChange={(e) => setRole(e.target.value)} /></label>
                </fieldset>
                
                <br/>

                {role === "DIETETICIEN" && champsDiet()}
                {role === "PATIENT" && champsPatient()}

                <br/><br/>
                
                <input type="submit" value="S'inscrire" disabled={!passwordsMatch}/>
            </form>
        </div>
    );

}

export default PageInscription
