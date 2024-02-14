import { useContext } from "react";
import { AuthContext } from "../privuder/AuthProvider";


const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;