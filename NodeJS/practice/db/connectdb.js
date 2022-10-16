import mongoose from "mongoose";
// const connectdb = (databaseURL) => {
//   return mongoose
//     .connect(databaseURL)
//     .then(() => {
//       console.log("Connection Successfull....");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const connectdb = async (databaseURL) => {
  try {
    const DB_OPTIONS = {
        dbName:'schooldb',
    };
    await mongoose.connect(databaseURL,DB_OPTIONS);
    console.log("Connection Successfull....");
  } catch (err) {
    console.log(err);
  }
};

export default connectdb;
