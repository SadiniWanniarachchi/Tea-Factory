import React, { useState } from "react";

const TeaProduction = () => {
  const [batches, setBatches] = useState([]); // State for tea batches
  const [formData, setFormData] = useState({
    id: "",
    type: "",
    weight: "",
    productionDate: "",
  }); 
  
  // State for form data
  const [isEditing, setIsEditing] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new batch
  const handleAddBatch = () => {
    if (formData.type && formData.weight && formData.productionDate) {
      setBatches([...batches, { ...formData, id: Date.now() }]);
      setFormData({ id: "", type: "", weight: "", productionDate: "" });
    }
  };

  // Edit an existing batch
  const handleEditBatch = (id) => {
    const batchToEdit = batches.find((batch) => batch.id === id);
    setFormData(batchToEdit);
    setIsEditing(true);
  };

  // Update the batch
  const handleUpdateBatch = () => {
    setBatches(
      batches.map((batch) =>
        batch.id === formData.id ? { ...formData } : batch
      )
    );
    setFormData({ id: "", type: "", weight: "", productionDate: "" });
    setIsEditing(false);
  };

  // Delete a batch
  const handleDeleteBatch = (id) => {
    setBatches(batches.filter((batch) => batch.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-6">
          Tea Production Management
        </h1>

        {/* Form Section */}
        <div className="bg-gray-100 p-6 rounded-lg mb-8 shadow">
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            {isEditing ? "Edit Tea Batch" : "Add New Tea Batch"}
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="Type of Tea (e.g., Green, Black)"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Weight (in kg)"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="date"
              name="productionDate"
              value={formData.productionDate}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
            />
            <button
              onClick={isEditing ? handleUpdateBatch : handleAddBatch}
              className={`w-full py-3 rounded-md font-bold ${
                isEditing
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-green-600 hover:bg-green-700 text-white"
              }`}
            >
              {isEditing ? "Update Batch" : "Add Batch"}
            </button>
          </div>
        </div>

        {/* Batch List Section */}
        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            Tea Batches
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="p-4 text-left">Type</th>
                  <th className="p-4 text-left">Weight (kg)</th>
                  <th className="p-4 text-left">Production Date</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {batches.length === 0 ? (
                  <tr>
                    <td
                      colSpan="4"
                      className="p-4 text-center text-gray-500 italic"
                    >
                      No batches available.
                    </td>
                  </tr>
                ) : (
                  batches.map((batch) => (
                    <tr
                      key={batch.id}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="p-4">{batch.type}</td>
                      <td className="p-4">{batch.weight}</td>
                      <td className="p-4">{batch.productionDate}</td>
                      <td className="p-4 flex justify-center space-x-4">
                        <button
                          onClick={() => handleEditBatch(batch.id)}
                          className="text-blue-600 hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteBatch(batch.id)}
                          className="text-red-600 hover:underline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeaProduction;
