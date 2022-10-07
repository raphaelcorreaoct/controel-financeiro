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

    switch (req.method) {
      case "GET":
        return transactions.findByUserId(req, res);
        break;
      case "POST":
        return transactions.create(req, res);
        break;
      case "PUT":
        return transactions.update(req, res);
        break;
      case "DELETE":
        return transactions.delete(req, res);
        break;
      default:
        return res.status(405).json({ message: "Method not allowed" });
        break;
    }
  });
}
