import mongoose from "mongoose";

const { Schema } = mongoose;

const whiteListSubscriptorSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  ethWallet: { type: String, required: true },
  discordUserName: { type: String, required: true },
  termsAndConditions: { type: Boolean, required: true },
});

const WhiteListSubscriptor =
  mongoose.models.WhiteListSubscriptor ||
  mongoose.model("WhiteListSubscriptor", whiteListSubscriptorSchema);
// no spaces in the "NameOftheSchema" in between coment coutes.

export default WhiteListSubscriptor;
