/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, { useEffect, createContext, useState } from "react";
import { useData } from "../Hooks/useData";
import { useLocalStorage } from "../Hooks/useLocalStorage";

export const DataContext = createContext();

function DataContextProvider({ children }) {
    const data = useData()
    const localStorage = useLocalStorage()
    
    const [password, setPassword] = useState()
    
    const [token, setToken] = useState()
    
    const [avatar, setAvatar] = useState()
    
    const [newPassword,setNewPassword]=useState(false)
    
    const updateNewPassword=(value)=>{
        setNewPassword(value)
    }
    
    const getRut = (usuarioRUT) => {
        data.setState({ ...data.state, usuarioRUT })
    }
    const getPassword = (pass) => {
        setPassword(pass)
    }
   
    const getNewUser=(newUser)=>{
        setIsNewUser(newUser)
    }
    const getToken=(token)=>{
        setToken(token)
        console.log('token',token,'token')
    }
    
    return (
        <DataContext.Provider value={{ ...data}}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;

