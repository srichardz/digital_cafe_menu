import mongoose from "mongoose";
declare global {
  var mongoose: any; // This must be a `var` and not a `let / const`
}

const MONGODB_URI = process.env.MONGODB_URI!;

const cached: { connection?: typeof mongoose; promise?: Promise<typeof mongoose> } = {};

async function dbConnect() {
  if (!MONGODB_URI) {
      throw new Error('Please define the MONGO_URI environment variable inside .env.local');
  }
  if (cached.connection) {
      return cached.connection;
  }
  if (!cached.promise) {
      const opts = {
          bufferCommands: false,
      };
      cached.promise = mongoose.connect(MONGODB_URI, opts);
  }
  try {
      cached.connection = await cached.promise;
  } catch (e) {
      cached.promise = undefined;
      throw e;
  }
  return cached.connection;
}

export default dbConnect;