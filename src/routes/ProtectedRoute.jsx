import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, roles }) => {

    const { user, loading } = useAuth();

    if (loading) {
        return <p>Chargement...</p>;
    }

    if (!user) {
        return <Navigate to="/connexion" replace />;
    }

    if (roles && !roles.includes(user.role)) {
        return <Navigate to="/acces-interdit" replace />;
    }

    return children;
};

export default ProtectedRoute;