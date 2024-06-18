import mongoose from "mongoose";

const sectionSchema = mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String },
  cotisations: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export default mongoose.model("Section", sectionSchema);
