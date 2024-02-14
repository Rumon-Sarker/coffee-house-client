import { useQuery } from "@tanstack/react-query";
import useAxionSecure from "./useAxionSecure";
import useAuth from "./useAuth";


const useCart = () => {
    const axiosSecures = useAxionSecure();
    const { user } = useAuth();
    const { data: cart = [], refetch } = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async () => {
            const res = await axiosSecures.get(`/carts?email=${user.email}`);
            return res.data

        }

    })
    return [cart, refetch]

};

export default useCart;