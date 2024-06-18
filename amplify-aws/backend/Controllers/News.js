import News from "../Modeles/News.js";

export const index = async (req, res) => {
  try {
    let news = await News.find();
    res.status(200).json(news);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

export const create = async (req, res) => {
  try {
    let news = await News.create(req.body);
    news.idClient = req.payload.id_utilisateur;
    res.status(200).json({ message: "News crée", news });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

export const show = async (req, res) => {
  try {
    let news = await News.findById(req.params.id);
    res.status(200).json(news);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

export const update = async (req, res) => {
  try {
    let { id } = req.params;
    // let { stade, année } = req.body;
    let news = await News.findById(id);
    news.titre = req.body.nom;
    news.description = req.body.description;
    news.date = req.body.date;
    await news.save();
    res.status(200).json(news);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const destroy = async (req, res) => {
  try {
    let { id } = req.params;
    // let { stade, année} = req.body;
    let news = await News.findById(id);
    await news.deleteOne();
    res.status(200).json(news);
  } catch (err) {
    res.status(400).json(err);
  }
};
