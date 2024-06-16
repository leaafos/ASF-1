import React from "react";
import { useState } from "react";
import "../styles/admin.css";

const Admin = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    photo: "",
    idClient: "",
    createdAt: "",
    updatedAt: "",
  });

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log("Form data submitted:", formData);
  };

  const [formDataSection, setFormDataSection] = useState({
    nom: "",
    photo: "",
    infos: "",
    entrainements: "",
    inscriptions: "",
    cotisations: "",
    contact: "",
    idClient: "",
    createdAt: "",
    updatedAt: "",
  });

  const handleInputChangeSection = (event) => {
    const { name, value } = event.target;
    setFormDataSection({
      ...formDataSection,
      [name]: value,
    });
  };

  const renderFormFields = () => {
    switch (selectedOption) {
      case "Album":
        return (
          <div className="form-container">
            <div className="form-group">
              <label className="label-admin" for="nom">
                Nom:{" "}
              </label>
              <input
                type="text"
                id="title"
                className="input-admin"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="année">
                Année:{" "}
              </label>
              <input
                type="date"
                id="date"
                className="input-admin"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="description">
                Description:{" "}
              </label>
              <textarea
                id="description"
                className="textarea-admin"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="photo">
                Photo:{" "}
              </label>
              <input
                type="text"
                id="photo"
                className="input-admin"
                value={formData.photo}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="id Client">
                ID Client:{" "}
              </label>
              <input
                type="text"
                id="idClient"
                className="input-admin"
                value={formData.idClient}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="crée le">
                Créé le:{" "}
              </label>
              <input
                type="date"
                id="createdAt"
                className="input-admin"
                value={formData.createdAt}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="mis à jour le">
                Mis à jour le:{" "}
              </label>
              <input
                type="date"
                id="updatedAt"
                className="input-admin"
                value={formData.updatedAt}
                onChange={handleInputChange}
              />
            </div>
          </div>
        );

      case "Section":
        return (
          <div className="form-container">
            <div className="form-group">
              <label className="label-admin" for="nom">
                Nom:{" "}
              </label>
              <input
                type="text"
                id="title"
                className="input-admin"
                value={formDataSection.title}
                onChange={handleInputChangeSection}
              />
            </div>

            <div className="form-group">
              <label className="label-admin" for="photo">
                Photo:{" "}
              </label>
              <input
                type="text"
                id="photo"
                className="input-admin"
                value={formDataSection.photo}
                onChange={handleInputChangeSection}
              />
            </div>

            <div className="form-group">
              <label className="label-admin" for="Quelques infos">
                Quelques infos:{" "}
              </label>
              <textarea
                id="Quelques infos"
                className="textarea-admin"
                value={formDataSection.infos}
                onChange={handleInputChangeSection}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="Entrainements">
                Entrainements:{" "}
              </label>
              <textarea
                id="Entrainements"
                className="textarea-admin"
                value={formDataSection.entrainements}
                onChange={handleInputChangeSection}
              />
            </div>

            <div className="form-group">
              <label
                className="label-admin"
                for="Inscriptions - paiement en ligne"
              >
                Inscriptions - Paiement en ligne:{" "}
              </label>
              <textarea
                id="Inscription"
                className="textarea-admin"
                value={formDataSection.inscriptions}
                onChange={handleInputChangeSection}
              />
            </div>

            <div className="form-group">
              <label className="label-admin" for="cotisations">
                Cotisations:{" "}
              </label>
              <textarea
                id="Cotisations"
                className="textarea-admin"
                value={formDataSection.cotisations}
                onChange={handleInputChangeSection}
              />
            </div>

            <div className="form-group">
              <label className="label-admin" for="Contact / Renseignements">
                Contact / Renseignements:{" "}
              </label>
              <textarea
                id="Contact"
                className="textarea-admin"
                value={formDataSection.contact}
                onChange={handleInputChangeSection}
              />
            </div>

            <div className="form-group">
              <label className="label-admin" for="idClient">
                ID Client:{" "}
              </label>
              <input
                type="text"
                id="idClient"
                className="input-admin"
                value={formDataSection.idClient}
                onChange={handleInputChangeSection}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="Crée le">
                Créé le:{" "}
              </label>
              <input
                type="date"
                id="createdAt"
                className="input-admin"
                value={formDataSection.createdAt}
                onChange={handleInputChangeSection}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="Mis à jour le">
                Mis à jour le:{" "}
              </label>
              <input
                type="date"
                id="updatedAt"
                className="input-admin"
                value={formDataSection.updatedAt}
                onChange={handleInputChangeSection}
              />
            </div>
          </div>
        );

      case "Event":
        return (
          <div className="form-container">
            <div className="form-group">
              <label className="label-admin" for="titre">
                Titre:{" "}
              </label>
              <input
                id="titre"
                type="text"
                className="input-admin"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="date">
                Date:{" "}
              </label>
              <input
                type="date"
                id="date"
                className="input-admin"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="idClient">
                Description:{" "}
              </label>
              <textarea
                id="description"
                className="textarea-admin"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="photo">
                Photo:{" "}
              </label>
              <input
                type="text"
                id="photo"
                className="input-admin"
                value={formData.photo}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="idClient">
                ID Client:{" "}
              </label>
              <input
                type="text"
                id="idClient"
                className="input-admin"
                value={formData.idClient}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="Crée le">
                Créé le:{" "}
              </label>
              <input
                type="date"
                id="createdAt"
                className="input-admin"
                value={formData.createdAt}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="Mis à jour le">
                Mis à jour le:{" "}
              </label>
              <input
                type="date"
                id="updatedAt"
                className="input-admin"
                value={formData.updatedAt}
                onChange={handleInputChange}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="body-admin">
      <h1 className="h1-admin">Créer un nouvel élément</h1>
      <div>
        <label className="label-admin">Type: </label>
        <select
          className="select-admin "
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="">--Choisir une option--</option>
          <option value="Album">Album</option>
          <option value="Event">Évènement</option>
          <option value="Section">Section</option>
        </select>
      </div>
      {selectedOption && (
        <form className="admin-form" onSubmit={handleSubmit}>
          {renderFormFields()}
          <div class="button-group">
            <button className="button-admin" type="submit">
              Ajouter
            </button>
            <button
              className="button-admin update"
              type="button"
              onClick={() => alert("Mettre à jour action")}
            >
              Mettre à jour
            </button>
            <button
              className="button-admin delete"
              type="button"
              onClick={() => alert("Supprimer action")}
            >
              Supprimer
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Admin;
