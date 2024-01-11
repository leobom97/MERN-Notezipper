const mongoose = require("mongoose");

const databaseConnection = async () => {
  try {
    const conexao = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Database succefully conected: ${conexao.connection.host}`);
  } catch (error) {
    throw new Error(`Database connection failed: ${error}`);
  }
};

module.exports = databaseConnection;
