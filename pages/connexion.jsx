import { TextField, Button } from '@mui/material'
import React, {useState, useContext} from 'react'
import { UserContext } from '../context/userContext'
import { useRouter } from 'next/router'
const Connexion = () => {
    const [user, setUser] = useState({login : "" , password : ""});
    const profil = useContext(UserContext);
    const router = useRouter();
    const tableau = [];
    console.log(tableau);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.login === profil.login && user.password === profil.password){
            console.log(profil);
            profil.setProfil(prevProfil => {
                return ({...prevProfil, isLogged:true});
            })
            router.push('/');
        }
        console.log(profil);
    }

    const handleChange = (e) => {
        const { name , value } = e.target ;
        setUser({...user , [name]: value});
    };

  return (
    <div >
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>
            <TextField 
            placeholder='login'
            value={user.login}
            onChange={handleChange} 
            name='login'
            />

            <TextField  
                placeholder='mot de passe' 
                type='password' 
                value={user.password}
                onChange={handleChange} 
                name='password'
                />
            <Button
            type='submit'
            >
                Connexion
            </Button>
        </form>
    </div>
  )
}

export default Connexion