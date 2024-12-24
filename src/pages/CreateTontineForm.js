import React, { useState } from "react";

const CreateTontineForm = ({ onClose }) => {
  const [tontineName, setTontineName] = useState("");
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("mensuelle");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour enregistrer les données (ex: appel Firebase)
    console.log({ tontineName, amount, frequency });
    onClose(); // Fermer le formulaire après soumission
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Créer une nouvelle tontine</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nom de la tontine
          </label>
          <input
            type="text"
            value={tontineName}
            onChange={(e) => setTontineName(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Montant (en FCFA)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Fréquence
          </label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700"
          >
            <option value="mensuelle">Mensuelle</option>
            <option value="hebdomadaire">Hebdomadaire</option>
          </select>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Enregistrer
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTontineForm;
