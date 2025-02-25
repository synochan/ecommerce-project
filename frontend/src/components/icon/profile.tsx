import { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        // Fetch the user info after login (make sure to include token in headers if using JWT)
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/api/user', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setUser(response.data);  // Store the user data, including profile picture URL
            } catch (error) {
                console.error('Error fetching user data', error);
            }
        };

        fetchUserData();
    }, []); // Empty dependency array ensures this runs once after initial render

    return (
        <div>
            {user ? (
                <div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Profile;
