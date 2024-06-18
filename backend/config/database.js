const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(`MongoDB Database Connected To ${con.connection.host}`);
    })
    .catch(err => {
      console.error(`Error: ${err.message}`);
      process.exit(1);
  });
};

module.exports = connectDatabase;
