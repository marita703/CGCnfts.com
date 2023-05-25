import dbConnect from "@/db/connect";

// remember to install npm install @types/express
import Contact from "@/db/models/Contact";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await dbConnect();

  if (request.method === "POST") {
    console.log(request.body);
    try {
      const contactData = request.body;
      console.log(contactData);
      const contact = new Contact(contactData);
      await contact.save();
      return response.status(201).json(contact);
    } catch (error) {
      console.log(error);
      return response.status(400).json(error);
    }
  }
}
