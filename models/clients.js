import mongoose from "mongoose";
import argon2 from "argon2";

const { Schema } = mongoose;

/* Add more if required */
const ClientsSchema = new Schema(
  {
    client_name: {
      required: true,
      type: String,
    },
    client_city: {
      required: true,
      type: String,
    },
    client_country: {
      required: true,
      type: String,
    },
    client_business: {
        type:String
    }
  },
  { timestamps: true }
);
const Client = mongoose.model("Clients", ClientsSchema);

export default Client;
