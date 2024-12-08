"use client";
import { createContext, useState } from "react";

interface AuthContextValues {
    session: Session | undefined;
    signIn: () => void;
    signOut: () => void;
}

interface Session {
    name: string;
    isMentor: boolean;
    isAdmin: boolean;
}

const defaultAuthInfo = {
    session: {
        name: "",
        isMentor: false,
        isAdmin: false,
    },
    signIn: () => console.log("signed in"),
    signOut: () => console.log("signed out"),
};

export const AuthContext = createContext<AuthContextValues>(defaultAuthInfo);

export const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
    const [session, setSession] = useState<Session | undefined>({
        name: "Mayar",
        isMentor: false,
        isAdmin: true,
    });

    const signIn = () => {
        setSession({ name: "Mayar", isMentor: true, isAdmin: false });
    };

    const signOut = () => {
        setSession(undefined);
    };

    return (
        <AuthContext.Provider value={{ session, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
