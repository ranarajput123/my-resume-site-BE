import mongoose from "mongoose";
import argon2 from "argon2";

const { Schema } = mongoose;

/* Add more if required */
const MyWorkExperienceSchema = new Schema(
  {
    experiences: [
      {
        _id:false,
        company: {
          required: true,
          type: String,
        },
        company_city: {
          required: true,
          type: String,
        },
        company_country: {
          required: true,
          type: String,
        },
        client: {
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
        from: {
          required: true,
          type: Date,
        },
        to: {
          required: true,
          type: Date,
        },
        responsibilities: {
          required: true,
          type: String,
        },
        role: {
          required: true,
          type: String,
        },
        skills_used: [
          {
            _id:false,
            name: { required: true, type: String },
            domain: { required: true, type: String },
          },
        ],
      },
    ]
  },
  { timestamps: true }
);
const MyWorkExperience = mongoose.model(
  "MyWorkExperience",
  MyWorkExperienceSchema
);

export default MyWorkExperience;
