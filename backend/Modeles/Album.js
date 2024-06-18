import mongoose from "mongoose";

const albumSchema = mongoose.Schema({
  nom: { type: String, required: true },
  annee: { type: Number, required: true },
  description: { type: String, required: true },
  photo: { type: String },
  idClient: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export default mongoose.model("Album", albumSchema);
