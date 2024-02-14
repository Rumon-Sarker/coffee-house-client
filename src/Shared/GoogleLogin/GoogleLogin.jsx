import { useNavigate } from "react-router-dom";
import useAuth from "../../hocks/useAuth";
import useAxiosNoSecure from "../../hocks/useAxiosNoSecure";

const GoogleLogin = () => {
    const navigate = useNavigate()
    const axiosNoSecure = useAxiosNoSecure();
    const { googleSignin } = useAuth();
    const handlaeGoogleLogin = () => {
        googleSignin()
            .then(result => {
                console.log(result.user.displayName)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosNoSecure.post("/users", userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate("/");

                    })
            })
    }
    return (

        <div className="-mt-5">
            <button className="btn btn-outline w-5/6 bg-gray-400" onClick={handlaeGoogleLogin}><p className='font-bold text-xl'>Google</p></button>
        </div>

    );
};

export default GoogleLogin;