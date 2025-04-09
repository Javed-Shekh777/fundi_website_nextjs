const mongoose = require("mongoose");
const { DB_NAME } = require("../constants");

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(
      `${(process.env.MONGODB_URI)}/${DB_NAME}`
    );
    console.log(`Database connected to host : ${conn.connection.host}`);
  } catch (error) {
    throw new Error(`Database not connected due to :\n${error}`);
  }
};

module.exports = dbConnection;
