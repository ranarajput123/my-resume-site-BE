import mongoose from 'mongoose';

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
				lang: { type: String, required: true },
				proficiency: { type: String, required: true },
			},
		],
	},
	{ timestamps: true }
);
const MyPersonalDetails = mongoose.model(
	'MyPersonalDetails',
	MyPersonalDetailsSchema
);

export default MyPersonalDetails;
