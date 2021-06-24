import mongoose from 'mongoose';

const { Schema } = mongoose;

/* Add more if required */
const MyWorkExperienceSchema = new Schema(
	{
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
		clients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Clients' }],
		from: {
			required: true,
			type: Date,
		},
		to: {
			type: Date,
		},
		current: {
			type: Boolean,
			default: false
		},
		responsibilities: {
			required: true,
			type: String,
		},
		role: {
			required: true,
			type: String,
		},
		skills_used: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skills' }],
		url: {
			required: true,
			type: String
		},
		logo: {
			required: true,
			type: String
		}
	},
	{ timestamps: true }
);
const MyWorkExperience = mongoose.model(
	'MyWorkExperience',
	MyWorkExperienceSchema
);

export default MyWorkExperience;
