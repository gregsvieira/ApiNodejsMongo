import {} from 'dotenv/config'
import mongoose from 'mongoose';
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dbName =   process.env.DB_NAME;
const dbDocument = process.env.DB_DOCUMENT;

mongoose.connect(`mongodb+srv://${username}:${password}@${dbName}.anwyujn.mongodb.net/${dbDocument}`);

let db = mongoose.connection;

export default db;