import mongoose from "mongoose";

const { Schema } = mongoose;

let Post;

try {
  // Check if the model already exists
  Post = mongoose.model("Post");
} catch (error) {
  // Define the model if it doesn't exist
  const postSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  Post = mongoose.model("Post", postSchema);
}

export default Post;
