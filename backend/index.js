import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import axios from "axios";
import AdminRoutes from "./Routes/Admin.js";
import AlbumRoutes from "./Routes/Album.js";
import BenevoleRoutes from "./Modeles/Benevole.js";
import NewsRoutes from "./Modeles/News.js";
import SectionRoutes from "./Modeles/Section.js";
import cors from "cors";
import Config from "./Utils/Config.js";
import Logger from "./Utils/Logger.js";

let app = express();
mongoose
  .connect(process.env.MongoDB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "ASF",
  })
  .then(() => console.log("Connexion a la base de donnée établie"))
  .catch(() => console.log("Connexion a la base de donnée échouée"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/admin", AdminRoutes);
app.use("/album", AlbumRoutes);
app.use("/benevole", BenevoleRoutes);
app.use("/news", NewsRoutes);
app.use("/section", SectionRoutes);

app.listen(Config.PORT, () => {
  Logger.info(`Le serveur tourne bien sur le port ${Config.PORT}`);
});
