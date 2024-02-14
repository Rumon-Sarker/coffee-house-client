import axios from "axios";

export const axiosNoSecure = axios.create({
    baseURL: "https://green-coffee-house-server.vercel.app"
})

const useAxiosNoSecure = () => {
    return axiosNoSecure;
};

export default useAxiosNoSecure;