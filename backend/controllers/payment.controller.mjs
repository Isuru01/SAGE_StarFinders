import Payment from "../models/payment.model.mjs";
import Stripe from "stripe";
import TempBooking from "../models/tempbooking.model.mjs";

const stripe = new Stripe(
  "sk_test_51NOPV1BJEavTx21MkVkJoqiZuufC38PhJGE8ozfZiaq2bds7vVAavOFnLhhahPkHtXjvhW6ISZ9WbTbfjn0F3SZd004GUMQLxI"
);
const endpointSecret =
  "whsec_00c5a95006a991a95792986090cc4283bd77fad25cab9022889a64049012460e";

const listenHook = async (req, res, next) => {
  // Only verify the event if you have an endpoint secret defined.
  // Otherwise use the basic event deserialized with JSON.parse
  if (endpointSecret) {
    // Get the signature sent by Stripe
    const signature = req.headers["stripe-signature"];
    try {
      // Pass the raw request body to the constructEvent function
      const event = stripe.webhooks.constructEvent(
        req.body.toString(),
        signature,
        endpointSecret
      );
      // Handle the event
      switch (event.type) {
        case "payment_intent.succeeded":
          const paymentIntent = event.data.object;
          console.log(paymentIntent);
          console.log(
            `PaymentIntent for ${paymentIntent.amount} was successful!`
          );
          // Then define and call a method to handle the successful payment intent.
          // handlePaymentIntentSucceeded(paymentIntent);
          break;
        case "payment_method.attached":
          const paymentMethod = event.data.object;
          // Then define and call a method to handle the successful attachment of a PaymentMethod.
          // handlePaymentMethodAttached(paymentMethod);
          break;
        default:
          // Unexpected event type
          console.log(`Unhandled event type ${event.type}.`);
      }
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return res.sendStatus(400);
    }
  }

  // Return a 200 response to acknowledge receipt of the event
  res.send();
};

const createPayment = async (req, res, next) => {
  const { sid, username } = req.body;
  console.log(username);

  try {
    // Find the TempBooking document with the key that is equal to sid
    const tempBooking = await TempBooking.findOne({ key: sid }).populate("fee");

    // console.log(tempBooking);

    // Filter the seats to get only the ones where bookBy is equal to username and step is equal to 2
    const leftSeats = tempBooking.seats.left.filter(
      (seat) => seat.bookBy === username && seat.step === 1
    );
    const rightSeats = tempBooking.seats.right.filter(
      (seat) => seat.bookBy === username && seat.step === 1
    );

    console.log(leftSeats);

    // Get the seat numbers and the number of seats
    const seatNumbers = [...leftSeats, ...rightSeats].map((seat) => seat.seat);
    const noOfSeats = seatNumbers.length;

    const totalValue = noOfSeats * tempBooking.fee.price;

    const payment = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Tickets",
            },
            unit_amount: totalValue,
          },
          quantity: 1,
        },
      ],
      success_url: `http://localhost:5173/`,
      cancel_url: `http://localhost:5173/`,
    });

    console.log(payment.url);
    res.status(200).json({ url: payment.url });
  } catch (error) {
    next(error);
  }
};

export { createPayment, listenHook };
