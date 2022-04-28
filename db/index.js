import mongoose from "mongoose";

const URI =
  "mongodb+srv://qurban:<PASSWORD>@cluster0.vxjpl.mongodb.net/<DB-NAME>?retryWrites=true&w=majority";

const db = mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connection established successfully");
  });

export default db;
