import { useState } from "react";

export default function ProfileTabs({profile}) {
  const [activeTab, setActiveTab] = useState("about");

  const tabStyle = (tab) =>
    `pb-2 text-sm font-medium transition ${
      activeTab === tab
        ? "text-black border-b-2 border-black"
        : "text-gray-500 hover:text-black"
    }`;

  return (
    <div className="bg-white rounded-3xl shadow-md p-6 mt-8">

      {/* Tab Navigation */}
      <div className="flex gap-8 border-b border-gray-200">
        <button onClick={() => setActiveTab("about")} className={tabStyle("about")}>
          About
        </button>

        <button onClick={() => setActiveTab("skills")} className={tabStyle("skills")}>
          Skills
        </button>

        <button onClick={() => setActiveTab("timeline")} className={tabStyle("timeline")}>
          Timeline
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6 text-sm text-gray-700 leading-relaxed">
        {activeTab === "about" && (
          <p>
            Passionate full stack developer building scalable SaaS products using
            React, Node.js, and MongoDB.
          </p>
        )}

        {activeTab === "skills" && (
  <div className="flex flex-wrap gap-3">
    {profile.skills.map((skill) => (
      <span
        key={skill}
        className="px-4 py-1 rounded-full bg-black/5 text-gray-800 text-xs font-medium hover:bg-black hover:text-white transition-all duration-300"
      >
        {skill}
      </span>
    ))}
  </div>
)}


        {activeTab === "timeline" && (
  <div className="relative border-l border-gray-200 pl-6 space-y-8">
    
    <div className="relative">
      <span className="absolute -left-1 top-1 w-1 h-1 bg-black rounded-full"></span>
      <p className="font-medium">2025 - Present</p>
      <p className="text-gray-500 text-xs">
        MERN Stack Developer at Startup
      </p>
    </div>

    <div className="relative">
      <span className="absolute -left-1 top-1 w-1 h-1 bg-black rounded-full"></span>
      <p className="font-medium">2024</p>
      <p className="text-gray-500 text-xs">
        Built SmartBin Backend System
      </p>
    </div>

  </div>
)}

      </div>

    </div>
  );
}
