import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProfile } from "../app/features/profile/profileSlice.js";

export default function ProfileForm() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.profile);

  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    skills: "",
    experienceRole: "",
    experienceCompany: "",
    education: "",
    certificates: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedProfile = {
      name: formData.name,
      bio: formData.bio,
      skills: formData.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),

      experience: [
        {
          role: formData.experienceRole,
          company: formData.experienceCompany
        }
      ],

      education: formData.education
        .split(",")
        .map((edu) => edu.trim())
        .filter(Boolean),

      certificates: formData.certificates
        .split(",")
        .map((cert) => cert.trim())
        .filter(Boolean)
    };

    dispatch(saveProfile(formattedProfile));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6">

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <textarea
        name="bio"
        placeholder="Bio"
        value={formData.bio}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        type="text"
        name="skills"
        placeholder="Skills (comma separated)"
        value={formData.skills}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        type="text"
        name="experienceRole"
        placeholder="Experience Role"
        value={formData.experienceRole}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        type="text"
        name="experienceCompany"
        placeholder="Experience Company"
        value={formData.experienceCompany}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        type="text"
        name="education"
        placeholder="Education (comma separated)"
        value={formData.education}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        type="text"
        name="certificates"
        placeholder="Certificates (comma separated)"
        value={formData.certificates}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Saving..." : "Save Profile"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
