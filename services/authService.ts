import { auth } from "../firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const loginWithGoogle = async () => {
  const GProvider = new GoogleAuthProvider();
  await signInWithPopup(auth, GProvider);
};

export const loginWithEmailAndPass = async (email: string, pass: string) => {
  await signInWithEmailAndPassword(auth, email, pass);
};

export const createNewUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
};

export const LogOut = () =>
  signOut(auth).then(() => (window.location.href = "/"));
