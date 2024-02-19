import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser'
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes  from  "./routes/message.routes.js";
import userRoutes  from  "./routes/user.routes.js";




const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // Middleware for parsing JSON bodies
app.use(cookieParser())//Middleware for handling cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);



app.get("/", (req, res) => {
  // root route
  res.send("Hello World!!");
});


app.listen(PORT, () => {
    connectToMongoDB();
  console.log(`Server is up and running on port ${PORT}`);
});