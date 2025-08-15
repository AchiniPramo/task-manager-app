import { auth } from "@/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

export const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const register = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
}

export const logout = () => {
    return auth.signOut()
}