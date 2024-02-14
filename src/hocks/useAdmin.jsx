import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxionSecure from "./useAxionSecure";


const useAdmin = () => {
    const axiosSecure = useAxionSecure();
    const { user, loading } = useAuth();
    const { data: isAdmin, isPending } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data)
            return res.data?.admin
        }
    })
    return [isAdmin, isPending]
};

export default useAdmin;