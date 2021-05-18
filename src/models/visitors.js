import mongoose from 'mongoose';
import argon2 from 'argon2';

const { Schema } = mongoose;

/* Add more if required */
const VisitorSchema = new Schema(
	{
		email: {
			required: true,
			type: String,
			// validate: [emailValidator, "Please Provide Correct Email"], // true fine, false failed validation, message to sent in error
		},
		password: {
			type: String,
			required: true,
			select: false,
		},
		name: {
			type: String,
		},
		company: {
			type: String,
		},
		salt: {
			type: String,
			required: true,
			select: false,
		},
	},
	{ timestamps: true }
);
VisitorSchema.methods.isCorrectPassword = async function(password) {
	return await argon2.verify(
		(await Visitor.findOne({ email: this.email }, '+password')).password,
		password
	);
};
const Visitor = mongoose.model('Visitor', VisitorSchema);

export default Visitor;
