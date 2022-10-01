import { onAuthStateChanged, User } from "firebase/auth";
import router from "next/router";
import React, { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../firebase";

export type AuthUser = User | null;
export type AuthContextProps = {
  user: AuthUser;
  isLoggedIn: boolean;
  loading: boolean;
};

const AuthContext = createContext<AuthContextProps>({
  user: null,
  isLoggedIn: false,
  loading: true,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthUser>(null);
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoggedIn(true);
        router.push("/transactions");
      }
      setLoading(false);
    });
    return () => subscriber();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  return context;
};
