import mongoose from "mongoose";
import bcrypt from "bcrypt";

const benevoleSchema = mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  role: { type: String, default: "B" },
});

benevoleSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    let hashedPassword = await bcrypt.hash(this.password, 12);
    this.password = hashedPassword;
  }
  next();
});

export default mongoose.model("Benevole", benevoleSchema);
