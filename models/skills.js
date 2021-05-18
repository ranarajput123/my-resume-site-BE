import mongoose from "mongoose";
import argon2 from "argon2";

const { Schema } = mongoose;

/* Add more if required */
const SkillsSchema = new Schema(
  {
    skill_name: {
      required: true,
      type: String,
    },
    domain: {
      required: true,
      type: String,
    },
    description: {
      type: String,
    }
  },
  { timestamps: true }
);
const Skill = mongoose.model("Skills", SkillsSchema);

export default Skill;
