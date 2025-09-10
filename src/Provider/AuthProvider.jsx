import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Create New User
  const CreateNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   Login user
  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout user
  const logoutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    CreateNewUser,
    LoginUser,
    logoutUser,
  };

  // set oberver for user auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
