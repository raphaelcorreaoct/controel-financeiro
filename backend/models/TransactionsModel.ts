import { DataTransactionType, MoneyType } from "../../dataTypes";
import admin from "firebase-admin";
import { TransactionsRepository } from "../repository/TransactionsRepository";

export class TransactionsModel {
  description: string = "";
  date: string = "";
  category: string = "";
  money: MoneyType = { currency: "", value: 0 };
  type: string = "";
  uid?: string = undefined;
  user: { uid: string } = {
    uid: "",
  };

  private repository;

  constructor() {
    this.repository = new TransactionsRepository();
  }

  create(value: Omit<DataTransactionType, "uid">) {
    if (!value) {
      return Promise.reject({
        message: "Body is required",
        code: 500,
      });
    }

    const { description, date, category, money, type, user } = value;
    this.category = category;
    this.date = date;
    this.description = description;
    this.money = money;
    this.type = type;
    this.user = user;

    return this.repository
      .create({
        description: this.description,
        date: this.date,
        category: this.category,
        money: this.money,
        type: this.type,
        user: {
          uid: this.user.uid,
        },
      })
      .then((doc) => {
        this.uid = doc.uid;
      })
      .catch((error) => {
        return Promise.reject({
          message: error.message,
          code: 500,
        });
      });
    // this.uid = uid;
  }

  findByUserId() {
    if (!this.user.uid) {
      return Promise.reject({
        message: "User id is required",
        code: 500,
      });
    }

    return this.repository.findByUserId(this.user.uid);
  }
}
