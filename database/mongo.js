import mongoose from 'mongoose'
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
            console.log('databse error', err.message);
            process.exit(1);
          } else {
            console.log(
              `Successfully connected to mongodb at ${url}`
            );
          }
        }
      );
    } catch (e) {
      console.log('Database error', e.message);
      process.exit(1);
    }
  })();