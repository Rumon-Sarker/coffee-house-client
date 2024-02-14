import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosNoSecure from "../hocks/useAxiosNoSecure";
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const axiosNoSecure = useAxiosNoSecure();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const SignOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    const updateUser = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser);
            if (currentuser) {
                const userInfo = { email: currentuser.email };
                axiosNoSecure.post("/jwt", userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem("access-token", res.data.token)
                            setLoading(false)
                        }
                    })
            }
            else {
                localStorage.removeItem("access-token")
                setLoading(false)
            }
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        SignOut,
        updateUser,
        googleSignin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;