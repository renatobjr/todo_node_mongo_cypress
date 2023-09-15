const mongoose = require("mongoose");

const uri = 'mongodb://root:password@localhost:27017/todo_test?authSource=admin';
if (!uri) {
  throw new Error("Missing MONGO_URL_TEST environment variable");
}

async function dbClear() {
  await mongoose.connect(uri);
  try {
    await mongoose.connection.db.dropCollection('todos')
  } catch (error) {
    console.log(error)
  }
  await mongoose.disconnect();
}
module.exports = dbClear;
