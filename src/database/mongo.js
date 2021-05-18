import mongoose from 'mongoose';
const url = 'mongodb://localhost:27017/react';
(async () => {
	try {
		await mongoose.connect(
			url,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
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