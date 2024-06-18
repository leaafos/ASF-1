import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Admin from "../Modeles/Admin.js";
//import 'dotenv/config'

export const signup = async (req, res) => {
  try {
    let admin = await Admin.create(req.body);
    res.status(200).json({ message: "Admin créé" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

export const login = async (req, res) => {
  try {
    let admin = await Admin.findOne({ email: req.body.email });
    let isMatch = await bcrypt.compare(req.body.password, admin.password);
    if (admin) {
      if (isMatch) {
        res.status(200).json({
          id_utilisateur: admin._id,
          token: jwt.sign(
            { id_utilisateur: admin._id },
            "RANDOM_TOKEN_SECRET",
            { expiresIn: "24h" }
          ),
        });
      } else {
        res.status(400).json({ message: "Invalid mot de passe" });
      }
    } else res.status(400).json({ message: "Invalid email" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

export const Auth = (req, res, next) => {
  let token = req.headers.authorization.replace("Bearer ", "");
  jwt.verify(token, "RANDOM_TOKEN_SECRET", function (err, payload) {
    if (err) {
      res.status(401).json({ message: "Unauthorized" });
    } else req.payload = payload;
    next();
  });
};

export const Auth2 = async (req, res, next) => {
  let a = await Admin.findById(req.payload.id_utilisateur);
  if (a.role !== "A") {
    res.status(401).json({ message: "Vous n'avez pas la permission" });
  } else next();
};
