import { createContext } from "react";

        export const AuthContext = createContext();
        const AuthProviders = ({children}) => {
                const test = "didar";
                const authInfo ={
                    test,
                }
                
                return (
                    <AuthContext.Provider value={authInfo}>
                    {children}
                    </AuthContext.Provider>
                );
        };

        export default AuthProviders;