import dotenv from "dotenv";
dotenv.config();
import dayjs from "dayjs";
import bodyParser from "body-parser";

import { connectDB } from "./config/db.config.mjs";

import errorHandler from "./middleware/errorHandler.mjs";
import express from "express";
import cors from "cors";
import morgan from "morgan";
// import { connectDB } from "./config/db.config.mjs";
// import { createEvent } from "./controllers/event.controller.mjs";
import cron from "node-cron";
import { scheduleShuttle } from "./controllers/shuttle.controller.mjs";
import cookieParser from "cookie-parser";
// import errorHandler from "./middleware/errorHandler.mjs";
// import authenticate from "./middleware/authenticate.mjs";
// import router_user from "./routes/user.router.mjs";
// import router_payment from "./routes/payment.router.mjs";

import router_search from "./routes/search.router.mjs";
import router_booking from "./routes/booking.router.mjs";
import router_service from "./routes/service.router.mjs";
import router_user from "./routes/user.route.mjs";
import router_shuttle from "./routes/shuttle.router.mjs";
import router_payment from "./routes/payment.router.mjs";
import router_plannet from "./routes/planet.router.mjs";

console.log(dayjs().format("ddd"));

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

app.use(
  bodyParser.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
);

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

/*
   service create a blueprint for the shuttle and everyday check the date and
   open bookings prior to week for the shuttle
   when creating shuttle emp shuttle model will automatically created temp shuttle is the one 
   gives access to the user to select seat not the shuttle 
   once user selected a seat it will be lock for others untill user completing the booking seat step will be 1
   plan was to if the user complete the booking within 10min set the seat step back to 
   0 and available others users to select 
   stripe web hooks plan to implement 
*/

app.use("/api/shuttle", router_shuttle);
app.use("/api/pay", router_payment);
app.use("/api/service", router_service);
app.use("/api/user", router_user);
app.use("/api/search", router_search);
app.use("/api/plannet", router_plannet);
app.use("/api/booking", router_booking);
app.use(errorHandler);

// //
// cron.schedule("* * * * * *", scheduleShuttle);
cron.schedule("0 12 * * *", scheduleShuttle);

const startServer = async () => {
  try {
    app.listen(8080, () => {
      connectDB();
      console.log("Server started on port http://localhost:8080");
    });
  } catch (err) {
    console.log(err);
  }
};

export { startServer };
