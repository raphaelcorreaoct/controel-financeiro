import type { NextApiRequest, NextApiResponse } from "next";
import { authMiddleware } from "../../backend/middlewares/authMiddleware";
import { firebaseInitialize } from "../../backend/repository/Connect";
import { TransactionsController } from "./../../backend/controllers/TransactionsController";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  firebaseInitialize();
  authMiddleware(req, res, (req, res) => {
    const transactions = new TransactionsController();

    if (req.method === "GET") {
      try {
        return transactions.findByUserId(req, res);
      } catch {
        return res.status(400).json({ message: "Erro" });
      }
    }

    return res.status(404).json({ message: "Not Found" });
  });
}
