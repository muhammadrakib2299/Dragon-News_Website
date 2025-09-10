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
  const [loading, setLoading] = useState(true);

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
    loading,
    setLoading,
  };

  // set oberver for user auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
      setLoading(true);
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
