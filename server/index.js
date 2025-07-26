import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import lockRoute from "./routes/lock.routes.js"

dotenv.config();
const app = express();
app.use(express.json());

const PORT = 8000;

app.use("/api", lockRoute);


app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on PORT ${PORT}`);
});
