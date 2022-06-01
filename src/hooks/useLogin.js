import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function useLogin({ closeModal }) {
    const { login } = useAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true)

        login(email, password)
            .then(() => {
                setLoading(false)
                closeModal()
            })
            .catch((error) => setError('Error del servidor'));
    };

    return {
        error,
        loading,
        handleLogin,
        handleEmail,
        handlePassword
    };
}