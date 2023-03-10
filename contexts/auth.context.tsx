import React, { createContext, useContext, useEffect } from "react";
import useFirebaseAuth from "../hooks/useFirebaseAuth";
import auth, { User, UserCredential } from "firebase/auth";

import { useRouter } from "next/router";

interface AuthUserProviderProp {
  children: JSX.Element;
}

interface AuthUserProp {
  loading: boolean;
  authUser: auth.User | null;
  signOut: () => Promise<any>;
  signInWithCustomEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<any>;
  createNewUserWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<any>;
  updateUsername: (user: User, name: string) => Promise<void>;
  signInWithGoogle: () => Promise<any>;
  signInWithFacebook: () => Promise<any>;
}

const authUserContext = createContext<any>({
  authUser: null,
  loading: true,
  signOut: async () => {},
  signInWithCustomEmailAndPassword: async (
    email: string,
    password: string
  ) => {},
  createNewUserWithEmailAndPassword: async (
    email: string,
    password: string
  ) => {},
  updateUsername: async (user: User, name: string) => {},
  signInWithGoogle: async () => {},
  signInWithFacebook: async () => {},
});

// authUser,
// loading,
// signInWithCustomEmailAndPassword,
// createNewUserWithEmailAndPassword,
// updateUsername,
// signInWithGoogle,
// signInWithFacebook,
// signOut,

export function AuthUserProvider({ children }: AuthUserProviderProp) {
  const auth = useFirebaseAuth();
  const router = useRouter();

  // useEffect(() => {
  //   console.log('auth.authUser',auth.authUser)
  //   if(!auth.authUser) {
  //       router.push("/")
  //   }
  // }, [auth?.authUser])

  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}

export const useAuth = () => useContext(authUserContext);
