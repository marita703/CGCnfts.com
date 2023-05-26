import mongoose from "mongoose";

const { Schema } = mongoose;

const emailSubscriptorSchema = new Schema({
  email: { type: String, required: true },
});

const EmailSubscriptor =
  mongoose.models.EmailSubscriptor ||
  mongoose.model("EmailSubscriptor", emailSubscriptorSchema);

export default EmailSubscriptor;
