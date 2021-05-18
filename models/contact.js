import mongoose from "mongoose";
import argon2 from "argon2";

const { Schema } = mongoose;

/* Add more if required */
const ContactSchema = new Schema(
  {
    contact_type: {
      required: true,
      type: String,
    },
    contact_url: {
      required: true,
      type: String,
    },
    logo_url: {
      type: String,
    },
  },
  { timestamps: true }
);
const Contact = mongoose.model("ContactAndSocial", ContactSchema);

export default Contact;
