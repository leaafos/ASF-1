import Album from "../Modeles/Album.js";

export const index = async (req, res) => {
  try {
    let album = await Album.find();
    res.status(200).json(album);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

export const create = async (req, res) => {
  try {
    let album = await Album.create(req.body);
    album.idClient = req.payload.id_utilisateur;
    res.status(200).json({ message: "Album crée", album });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

export const show = async (req, res) => {
  try {
    let album = await Album.findById(req.params.id);
    res.status(200).json(album);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

export const update = async (req, res) => {
  try {
    let { id } = req.params;
    // let { stade, année } = req.body;
    let album = await Album.findById(id);
    album.nom = req.body.nom;
    album.description = req.body.description;
    album.annee = req.body.annee;
    await album.save();
    res.status(200).json(album);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const destroy = async (req, res) => {
  try {
    let { id } = req.params;
    // let { stade, année} = req.body;
    let album = await Album.findById(id);
    await album.deleteOne();
    res.status(200).json(album);
  } catch (err) {
    res.status(400).json(err);
  }
};
