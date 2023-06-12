import mongoose from "mongoose";

const { Schema } = mongoose;

let User;

try {
  // Check if the model already exists
  User = mongoose.model("User");
} catch (error) {
  // Define the model if it doesn't exist
  const userSchema = new Schema(
    {
      name: {
        type: String,
        unique: true,
        required: true,
      },
      email: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  User = mongoose.model("User", userSchema);
}

export default User;
