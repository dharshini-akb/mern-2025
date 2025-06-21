import { createContext } from "react";
export const Context=createContext();
export const UserContext=({children})=>{
    const user={name:"dharshini",phn:"9123456789"}
    return (
        <Context.Provider value={user}>
            {children}
        </Context.Provider>
    )
}
