import React from "react";
import { useState } from "react";
import Card from "../components/Card";
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

  const [cards, setCards] = useState([]);

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
    setCards([...cards, formData]);
    setFormData({
      title: "",
      date: "",
      description: "",
      photo: "",
      idClient: "",
      createdAt: "",
      updatedAt: "",
    });
  };

  const [formDataEvent, setFormDataEvent] = useState({
    title: "",
    photo: "",
    Informations: "",
    date: "",
    location: "",
    contact: "",
    idClient: "",
    createdAt: "",
    updatedAt: "",
  });

  const handleInputChangeEvent = (event) => {
    const { name, value } = event.target;
    setFormDataEvent({
      ...formDataEvent,
      [name]: value,
    });
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
              <label className="label-admin" for="title">
                Nom:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="input-admin"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="date">
                Année:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="input-admin"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="description">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                className="textarea-admin"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="photo">
                Photo:
              </label>
              <input
                type="text"
                id="photo"
                name="photo"
                className="input-admin"
                value={formData.photo}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="idClient">
                ID Client:
              </label>
              <input
                type="text"
                id="idClient"
                name="idClient"
                className="input-admin"
                value={formData.idClient}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="createdAt">
                Créé le:
              </label>
              <input
                type="date"
                id="createdAt"
                name="createdAt"
                className="input-admin"
                value={formData.createdAt}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="updateAt">
                Mis à jour le:
              </label>
              <input
                type="date"
                id="updatedAt"
                name="updateAt"
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
              <label className="label-admin" for="title">
                Nom:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="input-admin"
                value={formDataSection.title}
                onChange={handleInputChangeSection}
              />
            </div>

            <div className="form-group">
              <label className="label-admin" for="photo">
                Photo:
              </label>
              <input
                type="text"
                id="photo"
                name="photo"
                className="input-admin"
                value={formDataSection.photo}
                onChange={handleInputChangeSection}
              />
            </div>

            <div className="form-group">
              <label className="label-admin" for="infos">
                Quelques infos:
              </label>
              <textarea
                id="infos"
                name="infos"
                className="textarea-admin"
                value={formDataSection.infos}
                onChange={handleInputChangeSection}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="entrainements">
                Entrainements:
              </label>
              <textarea
                id="entrainements"
                name="entrainements"
                className="textarea-admin"
                value={formDataSection.entrainements}
                onChange={handleInputChangeSection}
              />
            </div>

            <div className="form-group">
              <label className="label-admin" for="inscriptions">
                Inscriptions - Paiement en ligne:
              </label>
              <textarea
                id="inscriptions"
                name="inscriptions"
                className="textarea-admin"
                value={formDataSection.inscriptions}
                onChange={handleInputChangeSection}
              />
            </div>

            <div className="form-group">
              <label className="label-admin" for="cotisations">
                Cotisations:
              </label>
              <textarea
                id="cotisations"
                name="cotisations"
                className="textarea-admin"
                value={formDataSection.cotisations}
                onChange={handleInputChangeSection}
              />
            </div>

            <div className="form-group">
              <label className="label-admin" for="contact">
                Contact / Renseignements:
              </label>
              <textarea
                id="contact"
                name="contact"
                className="textarea-admin"
                value={formDataSection.contact}
                onChange={handleInputChangeSection}
              />
            </div>

            <div className="form-group">
              <label className="label-admin" for="idClient">
                ID Client:
              </label>
              <input
                type="text"
                id="idClient"
                name="idClient"
                className="input-admin"
                value={formDataSection.idClient}
                onChange={handleInputChangeSection}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="createdAt">
                Créé le:
              </label>
              <input
                type="date"
                id="createdAt"
                name="createdAt"
                className="input-admin"
                value={formDataSection.createdAt}
                onChange={handleInputChangeSection}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="updateAt">
                Mis à jour le:
              </label>
              <input
                type="date"
                id="updatedAt"
                name="updateAt"
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
              <label className="label-admin" for="title">
                Titre:
              </label>
              <input
                id="title"
                type="text"
                name="title"
                className="input-admin"
                value={formData.title}
                onChange={handleInputChangeEvent}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="date">
                Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="input-admin"
                value={formData.date}
                onChange={handleInputChangeEvent}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="informations">
                Informations:
              </label>
              <textarea
                id="informations"
                name="informations"
                className="textarea-admin"
                value={formData.description}
                onChange={handleInputChangeEvent}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="photo">
                Photo:
              </label>
              <input
                type="text"
                id="photo"
                name="photo"
                className="input-admin"
                value={formData.photo}
                onChange={handleInputChangeEvent}
              />
            </div>

            <div className="form-group">
              <label className="label-admin" for="location">
                Lieu:
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="input-admin"
                value={formData.location}
                onChange={handleInputChangeEvent}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="contact">
                Contact:
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                className="input-admin"
                value={formData.contact}
                onChange={handleInputChangeEvent}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="idClient">
                ID Client:
              </label>
              <input
                type="text"
                id="idClient"
                name="idClient"
                className="input-admin"
                value={formData.idClient}
                onChange={handleInputChangeEvent}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="createdAt">
                Créé le:
              </label>
              <input
                type="date"
                id="createdAt"
                name="createdAt"
                className="input-admin"
                value={formData.createdAt}
                onChange={handleInputChangeEvent}
              />
            </div>
            <div className="form-group">
              <label className="label-admin" for="updateAt">
                Mis à jour le:
              </label>
              <input
                type="date"
                id="updatedAt"
                name="updateAt"
                className="input-admin"
                value={formData.updatedAt}
                onChange={handleInputChangeEvent}
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
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            photo={card.photo}
            date={card.date}
            informations={card.informations}
            location={card.location}
            contact={card.contact}
          />
        ))}
      </div>
    </div>
  );
};

export default Admin;
