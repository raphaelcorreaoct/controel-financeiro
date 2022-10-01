import admin from "firebase-admin";

export const Connect = () => {
  admin.initializeApp({
    credential: admin.credential.cert("serviceAccountKey.json"),
  });
};
