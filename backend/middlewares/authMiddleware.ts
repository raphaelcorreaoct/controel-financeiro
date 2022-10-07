import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { Connect } from "../repository/Connect";

export const authMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextApiHandler
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }

  try {
    // console.log("----------------", token);
    const decoded = await admin.auth().verifyIdToken(token, true);
    req.query = {
      uid: decoded.uid,
    };
    next(req, res);
  } catch (e) {
    console.log("authMiddleware", e);
    res.status(401).json({ message: "Invalid Token" });
  }
};
