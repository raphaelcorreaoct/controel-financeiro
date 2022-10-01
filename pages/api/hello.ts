// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { authMiddleware } from "../../backend/middlewares/authMiddleware";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  authMiddleware(req, res, (req, res) => {
    res.status(200).json({ name: "John Doe" });
  });
}
