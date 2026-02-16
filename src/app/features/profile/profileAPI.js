const API_BASE = "http://localhost:5000";

export const saveProfileAPI = async (profile) => {
  const response = await fetch(`${API_BASE}/api/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(profile)
  });

  if (!response.ok) {
    throw new Error("Failed to save profile");
  }

  return response.json();
};
