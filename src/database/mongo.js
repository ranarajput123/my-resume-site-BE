import mongoose from 'mongoose';
const {
	DEFAULT_DATABASE_NAME,
	DATABASE_USER,
	DATABASE_PASS,
	NODE_ENV
	// MONGO_URL,
	// MONGO_P,
	// MONGO_U
	// eslint-disable-next-line no-undef
} = process.env;

// const url = MONGO_URL ? `mongodb://${MONGO_U}:${MONGO_P}@${MONGO_URL}:27017/react?authSource=admin` : 'mongodb://localhost:27017/react'; // FOR AWS EKS 
const url = NODE_ENV === 'development' ?
	'mongodb://localhost:27017/react' :
	`mongodb+srv://${DATABASE_USER}:${DATABASE_PASS}@my-site-db-cluster0.rxni0.mongodb.net/${DEFAULT_DATABASE_NAME}?retryWrites=true&w=majority`;
(async () => {
	try {
		await mongoose.connect(
			url,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
				// ...auth
			},
			err => {
				if (err) {
					// eslint-disable-next-line no-console
					console.log('databse error', err.message);
					// eslint-disable-next-line no-undef
					process.exit(1);
				} else {
					// eslint-disable-next-line no-console
					console.log(
						`Successfully connected to mongodb at ${url}`
					);
				}
			}
		);
	} catch (e) {
		// eslint-disable-next-line no-console
		console.log('Database error', e.message);
		// eslint-disable-next-line no-undef
		process.exit(1);
	}
})();