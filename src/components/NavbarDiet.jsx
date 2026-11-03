import { NavLink } from "react-router-dom";

const NavbarDiet = () => {
    return (
        <nav>
            <NavLink to="/diet/patients">
                Mes patients
            </NavLink>

            <NavLink to="/diet/profil">
                Mon profil
            </NavLink>

            <NavLink to="/diet/modeles-plans">
                Plans Alimentaires
            </NavLink>
        </nav>
    );
};

export default NavbarDiet;