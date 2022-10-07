import { NextApiRequest, NextApiResponse } from "next";
import { TransactionsModel } from "../models/TransactionsModel";

export class TransactionsController {
  private transactionModel;

  constructor() {
    this.transactionModel = new TransactionsModel();
  }

  create(req: NextApiRequest, res: NextApiResponse) {
    const { description, date, category, money, type } = req.body;

    try {
      this.transactionModel.create({
        description,
        date,
        category,
        money,
        type,
        user: {
          uid: req.query.uid as string,
        },
      });
      return res.status(200).json({ message: "Transaction created" });
    } catch (error: any) {
      return res
        .status(400)
        .json({ message: error?.message || "Error when create transaction" });
    }
  }

  findByUserId(req: NextApiRequest, res: NextApiResponse) {
    const uid = req.query.uid as string;

    if (!uid) {
      return Promise.reject({
        message: "User id is required",
        code: 500,
      });
    }

    this.transactionModel.user = { uid };

    this.transactionModel
      .findByUserId()
      .then((transactions) => {
        return res.status(200).json(transactions);
      })
      .catch((error) => {
        console.log("transactions", error);
        return res.status(500).json({ message: error.message });
      });
  }

  update(req: NextApiRequest, res: NextApiResponse) {}

  delete(req: NextApiRequest, res: NextApiResponse) {}
}
