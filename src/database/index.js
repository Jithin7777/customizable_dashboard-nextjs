import mongoose from "mongoose";

const connectToDB = () => {
  const connectionString =
    "mongodb+srv://jithinjose:jithin@cluster0.9gyaz25.mongodb.net/Customizable_Dashboard?retryWrites=true&w=majority&appName=Cluster0";
  mongoose
    .connect(connectionString)
    .then(() => console.log("dashboard database connection successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;
