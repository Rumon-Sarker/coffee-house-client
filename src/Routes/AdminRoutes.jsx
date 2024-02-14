import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hocks/useAdmin";
import useAuth from "../hocks/useAuth";


const AdminRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isPending] = useAdmin();
    const location = useLocation();
    console.log("admin &users", user, isAdmin)
    if (loading || isPending) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to="/" state={{ from: location }} replace ></Navigate>
};

export default AdminRoutes;