import Payment from "../models/payment.model.mjs";
import TempBooking from "../models/tempbooking.model.mjs";

const updatePassenger = async (req, res, next) => {
  const { sid, passengers } = req.body;

  try {
    // Find the TempBooking document with the key that is equal to sid
    const tempBooking = await TempBooking.findOne({ key: sid });

    // Save the updated TempBooking document
    await tempBooking.save();

    res.status(200).json();
  } catch (error) {
    next(error);
  }
};

const getTicketTotal = async (req, res, next) => {
  const { sid, email } = req.body;
  try {
    // Find the TempBooking document with the key that is equal to sid
    const tempBooking = await TempBooking.findOne({ key: sid });

    // Update the seats for each passenger
    passengers.forEach((passenger) => {
      const { seat, name, nationality, GID } = passenger;

      // Find the seat in the left or right array
      const seatIndexLeft = tempBooking.seats.left.findIndex(
        (s) => s.seat === seat
      );
      const seatIndexRight = tempBooking.seats.right.findIndex(
        (s) => s.seat === seat
      );

      if (seatIndexLeft !== -1) {
        // Update the seat in the left array
        tempBooking.seats.left[seatIndexLeft].passenger = {
          name,
          nationality,
          GID,
        };
      } else if (seatIndexRight !== -1) {
        // Update the seat in the right array
        tempBooking.seats.right[seatIndexRight].passenger = {
          name,
          nationality,
          GID,
        };
      }
    });
  } catch (error) {
    next(error);
  }
};

export { updatePassenger, getTicketTotal };
