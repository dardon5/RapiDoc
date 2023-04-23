import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const AppointmentSchema = new mongoose.Schema(
  {
    doctor: {
      type: ObjectId,
      ref: "Doctor",
      required: true,
    },
    patient: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    insurance: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", AppointmentSchema);
