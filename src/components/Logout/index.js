import { useAuth } from 'context/AuthContext';

export default function Logout() {
    const { logout } = useAuth()

    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}