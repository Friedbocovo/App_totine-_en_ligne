import React, { useState } from "react";
import CreateTontineForm from "./CreateTontineForm";

const Dashboard = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowCreateForm(true)}
      >
        Créer une nouvelle tontine
      </button>

      {showCreateForm && (
        <CreateTontineForm onClose={() => setShowCreateForm(false)} />
      )}
    </div>
  );
};

export default Dashboard;
