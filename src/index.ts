import dotenv from "dotenv";
import connectDB from "./db";
import app from "./app";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error: any) => {
      console.log("Error: ", error);
    });
    app.listen(process.env.PORT || 5000, () => {
      console.log(`server listening @ 🚀 http://localhost:${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB Connection Error: " + err);
  });
