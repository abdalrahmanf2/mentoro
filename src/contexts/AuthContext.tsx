"use client";
import { MENTORS } from "@/lib/constants";
import { Mentor } from "@/lib/types";
import { createContext, useState } from "react";

interface AuthContextValues {
    session: Session | undefined;
    signIn: () => void;
    signOut: () => void;
}

interface Session {
    id: string;
    user: Mentor;
    isMentor: boolean;
    isAdmin: boolean;
}

const defaultAuthInfo = {
    session: {
        id: "1",
        user: MENTORS[0],
        isMentor: true,
        isAdmin: false,
    },
    signIn: () => console.log("signed in"),
    signOut: () => console.log("signed out"),
};

export const AuthContext = createContext<AuthContextValues>(defaultAuthInfo);

export const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
    const [session, setSession] = useState<Session | undefined>({
        id: "1",
        user: MENTORS[0],
        isMentor: true,
        isAdmin: true,
    });

    const signIn = () => {
        setSession({
            id: "1",
            user: MENTORS[0],
            isMentor: true,
            isAdmin: false,
        });
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
