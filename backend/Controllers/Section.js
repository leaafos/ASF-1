import Section from "../Modeles/ection.js";
import Admin from "../Modeles/Admin.js";

export const index = async (req, res) => {
  try {
    let section = await Section.find();
    res.status(200).json(section);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

export const create = async (req, res) => {
  try {
    let section = await Section.create(req.body);
    section.idClient = req.payload.id_utilisateur;
    res.status(200).json({ message: "Section crée", section });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

export const show = async (req, res) => {
  try {
    let section = await Section.findById(req.params.id);
    res.status(200).json(section);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

export const update = async (req, res) => {
  try {
    let { id } = req.params;
    // let { stade, année } = req.body;
    let section = await Section.findById(id);
    section.nom = req.body.nom;
    section.description = req.body.description;
    section.annee = req.body.annee;
    await section.save();
    res.status(200).json(section);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const destroy = async (req, res) => {
  try {
    let { id } = req.params;
    // let { stade, année} = req.body;
    let section = await Section.findById(id);
    await section.deleteOne();
    res.status(200).json(section);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const getSectionAdmin = async (req, res) => {
  try {
    let admin = await Admin.findById(req.payload.id_utilisateur);
    console.log(admin);
    let section = await Section.find({ idClient: admin._id });
    res.status(200).json(section);
  } catch (err) {
    res.status(400).json(err);
  }
};
