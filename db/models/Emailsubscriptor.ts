import mongoose from "mongoose";

const { Schema } = mongoose;

const emailSubscriptorSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  mapURL: { type: String, required: true },
  description: { type: String, required: true },
});

const EmailSubscriptor =
  mongoose.models.EmailSubscriptor ||
  mongoose.model("EmailSubscriptor", emailSubscriptorSchema);

export default EmailSubscriptor;
