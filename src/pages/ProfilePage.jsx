import { useState, useEffect } from "react";
import ProfileProgressModern from "../components/ProfileProgressModern";
import SkillsModern from "../components/SkillsModern";
import ExperienceModern from "../components/ExperienceModern";
import EducationModern from "../components/EducationModern";
import CertificationModern from "../components/CertificationModern";
import Navbar from "../components/Navbar";
import ProfileCover from "../components/ProfileCover";
import ProfileCard from "../components/ProfileCard";
import EditProfileModal from "../components/EditProfileModal";
import SectionModal from "../components/SectionModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, updateProfile } from "../app/features/profile/profileSlice.js"

export default function ProfilePage() {

const dispatch = useDispatch();

const { data: profile, loading } = useSelector(
  (state) => state.profile
);
const [isEduOpen, setIsEduOpen] = useState(false);


useEffect(() => {
  dispatch(fetchProfile());
}, [dispatch]);



  const [isEditing, setIsEditing] = useState(false);

  const [modalConfig, setModalConfig] = useState({
  isOpen: false,
  section: null,
  mode: "add",
  index: null,
  initialData: null
});

  
  const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [darkMode]);

if (loading) {
  return <p className="text-center mt-20">Loading profile...</p>;
}

if (!profile) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={() => setIsEditing(true)}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg"
      >
        Create Profile
      </button>

      <EditProfileModal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        profile={null}
      />
    </div>
  );
}

return (
  <div className="min-h-screen bg-[#f5f7fa] dark:bg-gray-900">
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

    <div className="max-w-screen-xl mx-auto px-6 py-10">

      {/* Profile Header Section */}
      <ProfileCover />
      <ProfileCard profile={profile} onEdit={() => setIsEditing(true)} />

      {/* Modern Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mt-12">

        <div className="xl:col-span-1 space-y-8">
          <ProfileProgressModern profile={profile} />
          <SkillsModern profile={profile} />
        </div>

        <div className="xl:col-span-2 space-y-10">
          <ExperienceModern
  profile={profile}
  onAdd={() =>
    setModalConfig({
      isOpen: true,
      section: "experience",
      mode: "add",
      index: null,
      initialData: null
    })
  }
/>


          <EducationModern
            profile={profile}
            onAdd={() =>
              setModalConfig({
                isOpen: true,
                section: "education",
                mode: "add",
                index: null,
                initialData: null
              })
            }
          />

          <CertificationModern profile={profile}  />
        </div>

      </div>

      <SectionModal
  isOpen={modalConfig.isOpen}
  section={modalConfig.section}
  mode={modalConfig.mode}
  initialData={modalConfig.initialData}
  onClose={() =>
    setModalConfig(prev => ({
      ...prev,
      isOpen: false
    }))
  }
  onSave={(data) => {
    let updatedProfile = { ...profile };

    if (modalConfig.section === "education") {
      updatedProfile.education = [
        ...(profile.education || []),
        data
      ];
    }

    if (modalConfig.section === "experience") {
      updatedProfile.experience = [
        ...(profile.experience || []),
        data
      ];
    }

    dispatch(updateProfile(updatedProfile));

    setModalConfig(prev => ({
      ...prev,
      isOpen: false
    }));
  }}
/>





      <EditProfileModal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        profile={profile}
      />

    </div>
  </div>
);
}