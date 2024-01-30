import { createContext } from "react";

interface UserContext{
    loggedIn: any,
    setIsLoggedIn: React.Dispatch<any>
}

export const LoggedInContext = createContext<UserContext | null>(null)