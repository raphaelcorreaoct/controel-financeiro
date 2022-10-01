import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import firebaseAdmin from "firebase-admin";

export const authMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextApiHandler
) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }
  try {
    const decoded = await firebaseAdmin.auth().verifyIdToken(token, true);
    req.query = {
      uid: decoded.uid,
    };
    next(req, res);
  } catch (e) {
    res.status(401).json({ message: "Not authorized" });
  }
};
