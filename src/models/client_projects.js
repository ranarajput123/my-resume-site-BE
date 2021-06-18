import mongoose from 'mongoose';

const { Schema } = mongoose;

/* Add more if required */
const ClientProjectSchema = new Schema(
	{
		client: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Clients',
		},
		role: {
			required: true,
			type: String,
		},
		description: {
			type: String,
		},
		stack: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Skills',
				require: true
			},
		],
		technologies: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Skills',
				require: true
			},
		],
		responsibilities: [{ type: String, required: true }],
	},
	{ timestamps: true }
);
const ClientProject = mongoose.model('ClientProjects', ClientProjectSchema);

export default ClientProject;
