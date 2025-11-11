import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    let uri = process.env.MONGODB_URI;

    if (!uri || uri.includes('<') || uri.includes('your_username')) {
      console.warn('MONGODB_URI is not set or contains placeholders. Falling back to local mongodb://127.0.0.1:27017/dentist-app');
      uri = 'mongodb://127.0.0.1:27017/dentist-app';
    }

    const conn = await mongoose.connect(uri, {
      // useNewUrlParser and useUnifiedTopology are defaults in Mongoose 6+
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;