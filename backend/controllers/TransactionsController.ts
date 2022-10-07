import { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";

export class TransactionsController {
  findByUserId(req: NextApiRequest, res: NextApiResponse) {
    console.log("findByUserId", req.query.uid);

    admin
      .firestore()
      .collection("transactions")
      // .where("userId", "==", req.query.userId)
      // .orderBy("date", "desc")
      .get()
      .then((querySnapshot) => {
        const transactions = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        console.log("transactions", transactions);
        return res.status(200).json(transactions);
      })
      .catch((error) => {
        console.log("transactions", error);
        return res.status(500).json({ message: error.message });
      });
  }
}
