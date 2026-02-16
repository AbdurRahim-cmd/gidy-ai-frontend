export default function SkillsModern({ profile, onAdd }) {
  const skills = Array.isArray(profile?.skills)
    ? profile.skills
    : [];

  return (
    <div
      className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl 
      rounded-3xl p-8 
      border border-gray-200/50 dark:border-gray-700/50
      shadow-md transition-all duration-500"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
          <h3 className="text-xl font-semibold tracking-tight">
            Skills
          </h3>
        </div>

        {/* Modern Add Button */}
        <button
          onClick={onAdd}
          className="w-9 h-9 flex items-center justify-center 
          rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 
          text-white text-lg shadow-md 
          hover:scale-110 transition-all duration-300"
        >
          +
        </button>
      </div>

      {/* Skills Grid */}
      {skills.length === 0 ? (
        <p className="text-sm text-gray-400">
          No skills added yet.
        </p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-5 py-2 rounded-full 
              bg-gradient-to-r from-indigo-100 to-blue-100 
              dark:from-indigo-500/20 dark:to-blue-500/20
              text-indigo-700 dark:text-indigo-300
              font-medium text-sm
              shadow-sm 
              hover:shadow-md hover:-translate-y-1 
              transition-all duration-300 cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
