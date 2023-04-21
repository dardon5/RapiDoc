import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

// Clinic schema
const UserSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", UserSchema);
