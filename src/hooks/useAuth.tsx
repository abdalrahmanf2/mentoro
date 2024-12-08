import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) {
        throw new Error("Component must be used within a MyContextProvider");
    }

    return ctx;
};

export default useAuth;
