const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let mongodbUrl = 'mongodb+srv://aldeadewumi247:36eVXxlqwPOAAum0@cluster0.c5e9ezy.mongodb.net/?retryWrites=true&w=majority'

if(process.env.MONGODB_URL){
  mongodbUrl = process.env.MONGODB_URL;
}


let database;

async function connectToDatabase() {
  const client = await MongoClient.connect(mongodbUrl);
  database = client.db('online-shop');
}



function getDb() {
  if (!database) {
    throw new Error('You must connect first!');
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb
};