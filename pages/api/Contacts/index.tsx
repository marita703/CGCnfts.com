import dbConnect from "@/db/connect";
import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from "express";
// remember to install npm install @types/express
import Contact from "@/db/models/Contact";

export default async function handler(
  request: ExpressRequest,
  response: ExpressResponse
) {
  await dbConnect();

  if (request.method === "POST") {
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
