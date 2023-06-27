import mongoose from "mongoose";

const { Schema } = mongoose;

const contactSchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);
// the things in "" has to match to the name of the schema.
// after mongoose.modes ... comes the name of the Model... this has to be the same as when moongose.model("nameOftheModel, and the variable)")

export default Contact;
