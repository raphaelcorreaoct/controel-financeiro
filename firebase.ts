import * as firebase from "firebase/app";
import * as Auth from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const apps = firebase.getApps();

if (!apps.length) {
  const app = firebase.initializeApp(clientCredentials);
  if (typeof window !== "undefined" && app) {
    getAnalytics(app);
  }
}

export const auth = Auth.getAuth();
export default firebase;
