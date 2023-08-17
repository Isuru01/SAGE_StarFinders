import mongoose from "mongoose";

export async function connectDB() {
<<<<<<< HEAD
  const uri = `mongodb+srv://abcduser:abcd123@clusterrootcode.3rawc27.mongodb.net/`;
=======
  const uri = ``;
>>>>>>> c8f33c16733573f1c07aa4b4a8985c33fc84fb56
  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(uri);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(`Atlas Server Connection Error ${err}`);
  }
}
