import React, {createContext,useState} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        isLoggedIn: false
    })

    return (
        <UserContext.Provider value = {{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}