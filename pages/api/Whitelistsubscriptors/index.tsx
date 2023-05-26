import dbConnect from "@/db/connect";

// remember to install npm install @types/express
import WhiteListSubscriptor from "@/db/models/Whitelistsubscriptor";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await dbConnect();

  if (request.method === "POST") {
    console.log(request.body);
    try {
      const wihiteListSubscriptorData = request.body;
      console.log(wihiteListSubscriptorData);
      const whiteListSubscriptor = new WhiteListSubscriptor(
        wihiteListSubscriptorData
      );
      await whiteListSubscriptor.save();
      return response.status(201).json(whiteListSubscriptor);
    } catch (error) {
      console.log(error);
      return response.status(400).json(error);
    }
  }
}
