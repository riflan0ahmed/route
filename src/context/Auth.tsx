import { createContext, Dispatch, FC, ReactNode, SetStateAction } from "react";
import { useLocalStorage } from "usehooks-ts";

export interface IAuth {
    auth: string;
    setAuth: Dispatch<SetStateAction<string>>;
}

export const AuthContext = createContext<IAuth | null>(null);

interface AuthProviderProps {
    children: ReactNode | JSX.Element;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [auth, setAuth] = useLocalStorage("userInfo", "");

    return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
