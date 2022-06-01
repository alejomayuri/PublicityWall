import { useEffect, useState } from "react";
import { useAuth } from 'context/AuthContext';

export default function ProfilePic() {
    const { currentUser } = useAuth()
    const [photoURL, setPhotoURL] = useState(null);

    useEffect(() => {
        if (currentUser && currentUser.photoURL) {
            setPhotoURL(currentUser.photoURL);
        }
    }, [currentUser]);
    
    return (
        <img src={photoURL} alt="profile" />
    )
}