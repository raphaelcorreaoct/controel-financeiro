import admin from "firebase-admin";

export const firebaseInitialize = () => {
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert("serviceAccountKey.json"),
    });
  }
};
