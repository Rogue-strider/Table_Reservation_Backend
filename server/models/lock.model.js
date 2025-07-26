import mongoose from "mongoose";

const lockSchema = new mongoose.Schema({
  tableId: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  expiry: { type: Date, required: true },
});

export default mongoose.model("Lock", lockSchema);
