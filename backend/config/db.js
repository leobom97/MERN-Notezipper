//Database connection
import mongoose from "mongoose";

const databaseConnection = async () => {
  try {
    const conexao = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database succefully conected: ${conexao.connection.host}`);
  } catch (error) {
    throw new Error(`Database connection failed: ${error}`);
  }
};

export default databaseConnection;
