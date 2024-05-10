import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

        export const AuthContext = createContext();


        const AuthProviders = ({children}) => {
            const [user, setUser] = useState(null);
            const [loading, setLoading] = useState(false);


              //  social provider
              const googleProvider = new GoogleAuthProvider();
              const FacebookProvider = new FacebookAuthProvider();
              // -------------------
              const googleLogin =() =>{
                setLoading(true)
                return signInWithPopup(auth, googleProvider);
             }
          
            
          
             const FacebookLogin =() =>{
              setLoading(true)
              return signInWithPopup(auth, FacebookProvider);
             }

              // console.log(googleLogin);
             //create user
            const createUser = (email, password) => {
                setLoading(true);
                return createUserWithEmailAndPassword(auth, email, password);
            }
            const logOut = async () => {
                // setLoading(true)
                return signOut(auth)
              }
              const updateUserProfile = (name, photo) => {
                return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photo,
                });
              };

              useEffect(() => {
                const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
                  setUser(currentUser);
                  console.log("user in the auth state changed", currentUser);
            
                  setLoading(false);
                });
                return () => {
                  return unSubscribe();
                };
              }, []);

              const signIn = (email, password) => {
                setLoading(true);
                return signInWithEmailAndPassword(auth, email, password);
              };



                







                
            const authInfo ={
                user,
                loading,
                setLoading,
                createUser,
                logOut,
                updateUserProfile,
                setUser,
                signIn,
                googleLogin,
                FacebookLogin
            }
                
            

                return (
                    <AuthContext.Provider value={authInfo}>
                    {children}
                    </AuthContext.Provider>
                );
        };

        export default AuthProviders;