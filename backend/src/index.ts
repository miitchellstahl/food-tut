import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

try {
  mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
  console.log("connected to DB");
} catch (error) {
  console.log(error);
}

const app = express();

//automatically converts info to json before it reaches server
app.use(express.json());

app.use(cors());

app.use("/api/my/user", myUserRoute);

app.listen(7000, () => {
  console.log("server started on local host: 7000");
});
