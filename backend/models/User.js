import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema(
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
    password: {
      type: String,
      required: true,
    },
    doctor: {
      type: ObjectId,
      ref: "Doctor",
      default: null,
      required: false,
    },
    appointments: [
      {
        type: ObjectId,
        ref: "Appointment",
        default: [],
        required: false,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
