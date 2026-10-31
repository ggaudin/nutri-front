import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import NavbarDiet from "../components/NavbarDiet";


const DietLayout = () => {
    const { user } = useAuth();

    return (
        <div>
            <header>
                <h1>Nutri</h1>
                <p>Bienvenue {user.prenom}</p>
            </header>

            <NavbarDiet />

            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default DietLayout;