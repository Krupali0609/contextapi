import React, {createContext, useState} from "react";

export const UserAuthContex= createContext();

export const UserAuthProvider=({children}) => {
const [user, setUser] = useState({
    name:"Meet",
    email: "meet@gmail.com"
})
return(
    <UserAuthContex.Provider value={user}> {children} </UserAuthContex.Provider>
)
}
