import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
// import { connectDB } from "./config/db.config.mjs";
// import { createEvent } from "./controllers/event.controller.mjs";
import cron from "node-cron";
import cookieParser from "cookie-parser";
// import errorHandler from "./middleware/errorHandler.mjs";
// import authenticate from "./middleware/authenticate.mjs";
// import router_user from "./routes/user.router.mjs";
// import router_payment from "./routes/payment.router.mjs";
// import router_search from "./routes/search.router.mjs";
// import router_doctor from "./routes/doctor.router.mjs";

import router_service from "./routes/service.router.mjs";
import router_user from "./routes/user.route.mjs";
import router_shuttle from "./routes/shuttle.router.mjs";

const app = express();

//middlewares
app.use(
  cors({
    origin: "http://localhost:5173", // replace with the URL of your client
    credentials: true,
  })
); //cross orgin resource sharing for giving access to our api

const { json, urlencoded } = express;

app.use(morgan("dev"));
app.use(json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

//not in use don't uncomment
// app.use(
//   session({
//     secret: "YOUR_SECRET_KEY",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// app.use("/api/user", router_user);

//authenticate the using middleware and cookie befor use uncomment
// app.use(authenticate);
// app.get("/api/authenticate", (req, res, next) => {
//   next();
// });

app.use("/api/shuttle", router_shuttle);
app.use("/api/service", router_service);
app.use("/api/user", router_user);
app.use(errorHandler);

// cron.schedule("* * * * *", createEvent);

const startServer = async () => {
  try {
    app.listen(8080, () => {
      //   connectDB();
      console.log("Server started on port http://localhost:8080");
    });
  } catch (err) {
    console.log(err);
  }
};

export { startServer };
