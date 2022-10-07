export interface DataTransactionType {
  description: string;
  date: string;
  category: string;
  money: MoneyType;
  type: string;
  uid: string;
  user: {
    uid: string;
  };
}

export interface MoneyType {
  currency: string;
  value: number;
}
