import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const DoctorSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    specialties: [
      {
        type: String,
        required: true,
      },
    ],
    insurance: [
      {
        type: String,
        required: true,
      },
    ],
    availability: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    appointments: [
      {
        type: ObjectId,
        ref: "Appointment",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Doctor", DoctorSchema);
