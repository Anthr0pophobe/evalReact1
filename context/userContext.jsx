import { createContext, useState } from "react";

export const UserContext = createContext();


export const UserProvider = ( props ) => {

    const [profil, setProfil] = useState({
        login: 'jean',
        password:'jeanne',
        isLogged: false
    });


    return <UserContext.Provider value={{...profil, setProfil}} >
        {props.children}
    </UserContext.Provider>
};

