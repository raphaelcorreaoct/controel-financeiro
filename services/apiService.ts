import axios from "axios";
import { DataTransactionType } from "../dataTypes";
import { tyrCatch } from "./helpErro";

const apiService = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
    authorization: localStorage.getItem("fb_token"), // TODO: Fix this line of code to get the token from the local storage ssr
  },
});

export const getTransactions = async (
  uid: string
): Promise<DataTransactionType[]> => {
  return tyrCatch(async () => {
    const { data } = await apiService.get(`/transactions/${uid}`);
    return data;
  });
};
