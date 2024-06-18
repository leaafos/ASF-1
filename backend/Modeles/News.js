import mongoose from "mongoose";

const newsSchema = mongoose.Schema({
  titre: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  photo: { type: String },
  idClient: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export default mongoose.model("News", newsSchema);
