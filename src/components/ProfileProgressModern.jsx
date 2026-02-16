export default function ProfileProgressModern({ profile }) {
  if (!profile) return null;

  const totalFields = 5;
  let completedFields = 0;

  if (profile.name) completedFields++;
  if (profile.bio) completedFields++;
  if (profile.skills?.length > 0) completedFields++;
  if (profile.experience?.length > 0) completedFields++;
  if (profile.education?.length > 0) completedFields++;

  const completion = Math.floor((completedFields / totalFields) * 100);

  // Dynamic gradient selection
  let gradient = "from-red-500 to-red-600";

  if (completion >= 50 && completion < 80) {
    gradient = "from-yellow-400 to-yellow-500";
  } else if (completion >= 80 && completion < 100) {
    gradient = "from-blue-500 to-indigo-600";
  } else if (completion === 100) {
    gradient = "from-green-400 to-emerald-600";
  }

  return (
    <div
      className={`relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl
      rounded-3xl p-8
      border border-gray-200/50 dark:border-gray-700/50
      transition-all duration-500
      ${completion === 100 ? "shadow-green-400/30 shadow-xl" : "shadow-md"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
          <h3 className="text-xl font-semibold tracking-tight">
            Level Up
          </h3>
        </div>

        {/* Percentage Badge */}
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium
          bg-gradient-to-r ${gradient} text-white`}
        >
          {completion}%
        </span>
      </div>

      {/* Progress Track */}
      <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">

        {/* Gradient Fill */}
        <div
          className={`h-full bg-gradient-to-r ${gradient}
          transition-all duration-700 ease-in-out`}
          style={{ width: `${completion}%` }}
        />

        {/* Shine effect */}
        <div className="absolute inset-0 bg-white/10 animate-pulse pointer-events-none"></div>
      </div>

      {/* Status Text */}
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        {completion === 100
          ? "Your profile is fully optimized."
          : completion >= 80
          ? "Almost there — just a few details left."
          : completion >= 50
          ? "Good progress. Keep building."
          : "Let’s complete your profile to level up."}
      </p>
    </div>
  );
}
