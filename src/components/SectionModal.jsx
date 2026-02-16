import { useState, useEffect } from "react";

export default function SectionModal({
  isOpen,
  section,
  mode,
  initialData,
  onClose,
  onSave
}) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData(initialData);
    } else {
      setFormData({});
    }
  }, [mode, initialData]);

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl w-96 space-y-6">

        <h3 className="text-lg font-semibold capitalize">
          {mode} {section}
        </h3>

        {/* INPUT SECTION */}
        <div className="space-y-4">

          {section === "education" && (
            <>
              <input
                placeholder="Degree"
                className="w-full border p-2 rounded"
                value={formData.degree || ""}
                onChange={(e) => handleChange("degree", e.target.value)}
              />

              <input
                placeholder="Institution"
                className="w-full border p-2 rounded"
                value={formData.institution || ""}
                onChange={(e) => handleChange("institution", e.target.value)}
              />

              <input
                placeholder="Start"
                className="w-full border p-2 rounded"
                value={formData.start || ""}
                onChange={(e) => handleChange("start", e.target.value)}
              />

              <input
                placeholder="End"
                className="w-full border p-2 rounded"
                value={formData.end || ""}
                onChange={(e) => handleChange("end", e.target.value)}
              />
            </>
          )}

          {section === "experience" && (
            <>
              <input
                placeholder="Role"
                className="w-full border p-2 rounded"
                value={formData.role || ""}
                onChange={(e) => handleChange("role", e.target.value)}
              />

              <input
                placeholder="Company"
                className="w-full border p-2 rounded"
                value={formData.company || ""}
                onChange={(e) => handleChange("company", e.target.value)}
              />

              <input
                placeholder="Start"
                className="w-full border p-2 rounded"
                value={formData.start || ""}
                onChange={(e) => handleChange("start", e.target.value)}
              />

              <input
                placeholder="End"
                className="w-full border p-2 rounded"
                value={formData.end || ""}
                onChange={(e) => handleChange("end", e.target.value)}
              />
            </>
          )}

        </div>

        {/* BUTTON SECTION */}
        <div className="flex justify-end gap-3 pt-4">
          <button onClick={onClose}>
            Cancel
          </button>

          <button
            className="bg-indigo-500 text-white px-4 py-1 rounded"
            onClick={() => onSave(formData)}
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
}
