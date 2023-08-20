import Shuttle from "../models/shuttle.model.mjs";
import TempBooking from "../models/tempbooking.model.mjs";
import Service from "../models/service.model.mjs";
import dayjs from "dayjs";

const getSeatMap = async (req, res, next) => {
  try {
    const { id } = req.params;

    const seatMap = await TempBooking.findOne({ key: id });

    console.log(seatMap);

    res.status(200).json(seatMap);
  } catch (error) {
    next(error);
  }
};

const createShuttle = async (req, res, next) => {
  try {
    await Shuttle.create();
    res.status(200).json({ message: `shuttle is created` });
  } catch (error) {
    next(error);
  }
};

const getShuttle = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const scheduleShuttle = async (req, res, next) => {
  const today = dayjs().format("ddd");
  const day = dayjs().format("YYYY-MM-DD");
  const nextWeek = dayjs().add(1, "week").format("YYYY-MM-DD");

  try {
    const shuttles = await Service.find({ day: today }, { _id: 0, key: 0 });

    console.log(shuttles);

    for (const shuttle of shuttles) {
      const { depTime, duration, arrTime, ...res } = shuttle;

      const shuttleObject = shuttle.toObject();

      const durationFrame = duration.split(" ");
      const arrival = dayjs(`${nextWeek}T${arrTime.slice(11, 16)}`).format(
        "YYYY-MM-DDTHH:mm:ss"
      );

      const depature = dayjs(`${nextWeek}T${depTime.slice(11, 16)}`)
        .add(durationFrame[0], "day")
        .add(durationFrame[2], "hour")
        .add(durationFrame[4], "minute")
        .format("YYYY-MM-DDTHH:mm:ss");

      await Shuttle.create({
        ...shuttleObject,
        date: nextWeek,
        depTime: depature,
        arrTime: arrival,
        status: true,
      });

      console.log("Called", arrival, depature);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const seatOnHold = async (req, res, next) => {
  const { username, selected, sid } = req.body;

  try {
    // Find the TempBooking document by sid
    const tempBooking = await TempBooking.findOne({ key: sid });

    // Iterate through the selected seats
    for (const seat of selected) {
      // Check if the seat is on the left or right side
      const side = seat.seat.includes("L") ? "left" : "right";

      // Find the index of the seat in the seats array
      const seatIndex = tempBooking.seats[side].findIndex(
        (s) => s.seat === seat.seat
      );

      tempBooking.seats[side][seatIndex].bookBy = username;
      tempBooking.seats[side][seatIndex].step = 1;
    }

    // Save the updated TempBooking document
    await tempBooking.save();

    res.status(200).json({ message: "Seats locked successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllShuttle = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const updateShuttle = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

export {
  getSeatMap,
  scheduleShuttle,
  createShuttle,
  seatOnHold,
  getShuttle,
  getAllShuttle,
  updateShuttle,
};
