import { useState } from "react";
import Login from "components/Login"
import SingUp from "components/SingUp"
import AuthMessage from "components/AuthFormMessage";

export default function AuthSide({ closeModal }) {
    const [auth, setAuth] = useState(true);
    const handleChange = () => {
        setAuth(!auth);
    }

    return (
        <>
            {
                auth
                    ? <div>
                        <Login closeModal={closeModal} />
                        <AuthMessage onclick={handleChange} text='¿No estás registrado?' textButton='Regístrate' />
                    </div>
                    : <div>
                        <SingUp closeModal={closeModal} />
                        <AuthMessage onclick={handleChange} text='¿Ya tienes una cuenta?' textButton='Inicia sesión' />
                    </div>
            }
        </>
    )
}