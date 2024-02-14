import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
    baseURL: "https://green-coffee-house-server.vercel.app"
})

const useAxionSecure = () => {
    const navigate = useNavigate();
    const { SignOut } = useAuth();
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem("access-token")
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async function (error) {
        const status = error.response.status;
        console.log("status error in the interceptor", status);
        if (status === 401 || status === 403) {
            await SignOut()
            navigate("/login")

        }

        return Promise.reject(error);
    });

    return axiosSecure;
};

export default useAxionSecure;
