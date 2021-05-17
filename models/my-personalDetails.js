import mongoose from "mongoose";
import argon2 from "argon2";

const { Schema } = mongoose;

/* Add more if required */
const MyPersonalDetailsSchema = new Schema(
  {
    email: {
      required: true,
      type: String,
      // validate: [emailValidator, "Please Provide Correct Email"], // true fine, false failed validation, message to sent in error
    },
    first_name: {
      type: String,
      required: true,
    },
    middle_name: {
      type: String,
    },
    last_name: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
    },
    nationality: {
      type: String,
      required: true,
    },
    hometown_city: {
      type: String,
      required: true,
    },
    hometown_country: {
      type: String,
      required: true,
    },
    current_city: {
      type: String,
      required: true,
    },
    current_country: {
      type: String,
      required: true,
    },
    languages: [
      {
        _id: false,
        lang: String,
        proficiency: String,
      },
    ],
  },
  { timestamps: true }
);
MyPersonalDetailsSchema.methods.isCorrectPassword = async function(password) {
  return await argon2.verify(
    (await myPersonalDetails.findOne({ email: this.email }, "+password"))
      .password,
    password
  );
};
const MyPersonalDetails = mongoose.model(
  "MyPersonalDetails",
  MyPersonalDetailsSchema
);

export default MyPersonalDetails;
