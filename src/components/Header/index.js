import LoginWithGoogle from 'components/LoginWithGoogle'
import { useAuth } from 'context/AuthContext';
import './Header.css'
import Logout from 'components/Logout';
import ProfilePic from '../ProfilePic';

export default function Header() {
    const { currentUser } = useAuth()

    return (
        <header className='st-header'>
            {
                currentUser
                    ? <>
                        <Logout />
                        <ProfilePic />
                        <h1>{currentUser.uid}</h1>
                    </>
                    : <h1>lol</h1>
            }
        </header>
    )
}