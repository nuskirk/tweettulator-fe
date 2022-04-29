import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { fakeAuthService } from "./auth.service";

interface AuthContextType {
  user: any;
  signIn: (user: string, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}

export const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(null);
  const authService = fakeAuthService;

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      authService.isAuthenticated = true;
      setUser(user);
    }
  }, []);

  let signIn = (newUser: string, callback: VoidFunction) => {
    return authService.signIn(() => {
      setUser(newUser);
      localStorage.setItem("user", newUser);
      callback();
    });
  };

  let signOut = (callback: VoidFunction) => {
    return authService.signOut(() => {
      setUser(null);
      localStorage.removeItem("user");
      callback();
    });
  };

  let value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export function OnlyPublic({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (auth.user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
