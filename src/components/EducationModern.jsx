export default function EducationModern({ profile, onAdd }) {
  const educationList = Array.isArray(profile?.education)
    ? profile.education
    : [];

  return (
    <div
      className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl 
      rounded-3xl p-8 
      border border-gray-200/50 dark:border-gray-700/50
      shadow-md transition-all duration-500"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
          <h3 className="text-xl font-semibold tracking-tight">
            Education
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

      {/* Timeline Wrapper */}
      <div className="relative border-l border-gray-300 dark:border-gray-600 pl-8 space-y-10">

        {educationList.length === 0 && (
          <p className="text-sm text-gray-400">
            No education details added yet.
          </p>
        )}

        {educationList.map((edu, index) => (
          <div key={index} className="relative group">

            {/* Timeline Dot */}
            <span
              className="absolute -left-[41px] top-2 w-4 h-4 
              bg-gradient-to-r from-indigo-500 to-blue-600 
              rounded-full shadow-md
              group-hover:scale-125 transition-all duration-300"
            />

            {/* Education Card */}
            <div
              className="p-6 rounded-2xl 
              bg-white/60 dark:bg-gray-900/40
              border border-gray-200/40 dark:border-gray-700/40
              shadow-sm 
              transition-all duration-300
              hover:shadow-lg hover:-translate-y-1"
            >
              <h4 className="font-semibold text-lg">
                {edu?.degree || "Degree not specified"}
              </h4>

              <p className="text-sm text-gray-500 mt-1">
                {edu?.institution || "Institution not specified"}
              </p>

              <span
                className="inline-block mt-3 text-xs px-3 py-1 
                bg-indigo-100 dark:bg-indigo-500/20 
                text-indigo-600 dark:text-indigo-300 
                rounded-full"
              >
                {edu?.start || "Start"} – {edu?.end || "Present"}
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
