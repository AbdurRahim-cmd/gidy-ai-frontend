
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../app/features/profile/profileSlice.js";


export default function EditProfileModal({
  isOpen,
  onClose,
  profile,
}) {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    skills: "",
  });

  const dispatch = useDispatch();


  // Sync form when profile changes
  useEffect(() => {
    if (!profile) return;

    setFormData({
      name: profile.name || "",
      bio: profile.bio || "",
      skills: Array.isArray(profile.skills)
        ? profile.skills.join(", ")
        : "",
    });
  }, [profile]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSave = () => {
  const updatedProfile = {
    ...profile,
    name: formData.name,
    bio: formData.bio,
    skills: formData.skills
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s !== "")
  };

  dispatch(updateProfile(updatedProfile));

  onClose();
};


  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md shadow-lg">

        <h2 className="text-lg font-semibold mb-4 dark:text-white">
          Edit Profile
        </h2>

        <div className="space-y-4">

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1 text-sm 
              dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Bio
            </label>
            <input
              type="text"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1 text-sm 
              dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Skills (comma separated)
            </label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1 text-sm 
              dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm bg-black text-white rounded-lg"
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
}