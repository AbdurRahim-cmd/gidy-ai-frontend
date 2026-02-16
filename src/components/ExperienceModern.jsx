export default function ExperienceModern({ profile, onAdd }) {
 
  const experienceList = Array.isArray(profile?.experience)
    ? profile.experience
    : [];

  return (
    <div
      className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl 
      rounded-3xl p-8 
      border border-gray-200/50 dark:border-gray-700/50
      shadow-md transition-all duration-500"
    >
    <div className="flex items-center justify-between mb-10">

  <div className="flex items-center gap-3">
    <div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
    <h3 className="text-xl font-semibold tracking-tight">
      Experience
    </h3>
  </div>

  <button
    onClick={onAdd}
    className="w-9 h-9 flex items-center justify-center
    rounded-full bg-indigo-500 text-white
    hover:scale-110 transition-all duration-300"
  >
    +
  </button>

</div>


      

      <div className="relative border-l border-gray-300 dark:border-gray-600 pl-8 space-y-10">

        {experienceList.length === 0 && (
          <p className="text-sm text-gray-400">
            No experience added yet.
          </p>
        )}

        {experienceList.map((exp, index) => (
          <div key={index} className="relative group">

            {/* Timeline Dot */}
            <span className="absolute -left-[41px] top-2 w-4 h-4 
              bg-gradient-to-r from-indigo-500 to-blue-600 
              rounded-full shadow-md
              group-hover:scale-125 transition-all duration-300">
            </span>

            {/* Experience Card */}
            <div
              className="p-6 rounded-2xl 
              bg-white/60 dark:bg-gray-900/40
              border border-gray-200/40 dark:border-gray-700/40
              shadow-sm 
              transition-all duration-300
              hover:shadow-lg hover:-translate-y-1"
            >
              <h4 className="font-semibold text-lg">
                {exp.role}
              </h4>

              <p className="text-sm text-gray-500 mt-1">
                {exp.company}, {exp.location}
              </p>

              <span className="inline-block mt-3 text-xs px-3 py-1 
                bg-indigo-100 dark:bg-indigo-500/20 
                text-indigo-600 dark:text-indigo-300 
                rounded-full">
                {exp.start} – {exp.end}
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
