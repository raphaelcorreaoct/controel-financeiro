import admin from "firebase-admin";
import { DataTransactionType } from "./../../dataTypes";

export class TransactionsRepository {
  create(values: Omit<DataTransactionType, "uid">) {
    return admin
      .firestore()
      .collection("transactions")
      .add(values)
      .then((doc) => {
        return {
          ...values,
          uid: doc.id,
        };
      })
      .catch((error) => {
        return Promise.reject({
          message: error.message,
          code: 500,
        });
      });
  }

  findByUserId(uid: string) {
    console.log("uid", uid);

    return admin
      .firestore()
      .collection("transactions")
      .where("user.uid", "==", uid)
      .orderBy("date", "desc")
      .get()
      .then((querySnapshot) => {
        const transactions = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });

        return transactions;
      })
      .catch((error) => {
        return Promise.reject({
          message: error.message,
          code: 500,
        });
      });
  }
}
