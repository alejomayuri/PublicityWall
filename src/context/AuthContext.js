import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../services/firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)
 
export const AuthProvider = (props) => {

    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        })
    }, [])

    const singup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }
    const logout = () => auth.signOut()

    const value = {singup, login, logout, currentUser}

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}