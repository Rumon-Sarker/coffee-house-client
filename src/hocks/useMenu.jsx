import { useQuery } from "@tanstack/react-query";
import useAxiosNoSecure from "./useAxiosNoSecure";

const useMenu = () => {
    const axiosNoSecure = useAxiosNoSecure();
    const { data: menu = [], refetch, } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosNoSecure.get("/menu")
            return res.data
        }

    })
    return [menu, refetch]
}
export default useMenu;