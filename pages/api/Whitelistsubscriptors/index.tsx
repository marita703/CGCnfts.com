import dbConnect from "@/db/connect";

// remember to install npm install @types/express
import Whitelist from "@/db/models/Emailsubscriptor";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await dbConnect();

  if (request.method === "POST") {
    console.log(request.body);
    try {
      const emailSubscriptortData = request.body;
      console.log(emailSubscriptortData);
      const emailSubscriptor = new Emailsubscriptor(emailSubscriptortData);
      await emailSubscriptor.save();
      return response.status(201).json(emailSubscriptor);
    } catch (error) {
      console.log(error);
      return response.status(400).json(error);
    }
  }
}
