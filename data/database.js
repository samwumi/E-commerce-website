const { MongoClient } = require('mongodb');

const mongodbUrl = process.env.MONGODB_URL;

if (!mongodbUrl) {
  throw new Error('❌ MONGODB_URL environment variable is not set');
}


let database;

async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(mongodbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    database = client.db('online-shop');
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1); // Stop app if DB fails
  }
}

function getDb() {
  if (!database) {
    throw new Error('❌ You must connect to the database first!');
  }

  return database;
}

module.exports = {
  connectToDatabase,
  getDb
};
