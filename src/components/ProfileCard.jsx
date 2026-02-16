import { useDispatch, useSelector } from "react-redux";
import { generateAiBio } from "../app/features/profile/profileSlice";
export default function ProfileCard({ profile, onEdit }) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.profile.loading);

  const handleGenerate = () => {
    if (!profile) return;
    dispatch(generateAiBio());
  };

  return (
    <div className="relative -mt-16">

      <div
        className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-xl
        rounded-3xl p-10
        border border-gray-200/40 dark:border-gray-700/40
        shadow-xl transition-all duration-500"
      >
        <div className="grid md:grid-cols-[auto_1fr_auto] gap-8 items-start">

          {/* Avatar */}
          <div className="relative">
            <div className="w-28 h-28 rounded-full 
              bg-gradient-to-tr from-indigo-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-200"></div>
            </div>

            <span className="absolute bottom-2 right-2 w-4 h-4 
              bg-green-500 rounded-full border-2 border-white dark:border-gray-800">
            </span>
          </div>

          {/* Text Section */}
          <div className="min-w-0">

            <h2 className="text-3xl font-bold tracking-tight
              text-gray-900 dark:text-gray-100">
              {profile?.name}
            </h2>

            <p className="text-slate-600 dark:text-slate-400 font-medium mt-2 leading-relaxed">
              {profile?.bio || "No bio added yet."}
            </p>

            {/* AI Generate Button */}
            <div className="mt-4 flex items-center gap-3">

              <button
                onClick={handleGenerate}
                disabled={loading}
                className="group relative inline-flex items-center gap-2
                px-5 py-2 rounded-full
                bg-white/60 dark:bg-gray-700/50
                backdrop-blur-md
                border border-indigo-300/40 dark:border-indigo-500/40
                text-sm font-medium
                text-indigo-600 dark:text-indigo-300
                shadow-md
                transition-all duration-300
                hover:shadow-indigo-400/40 hover:scale-105
                disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>
                  {loading ? "Generating..." : "Generate AI Bio"}
                </span>

                <span className="text-xs px-2 py-0.5 rounded-full
                  bg-gradient-to-r from-indigo-500 to-purple-500
                  text-white">
                  AI
                </span>
              </button>

            </div>

          </div>

          {/* Edit Button */}
          <div className="flex justify-end">
            <button
              onClick={onEdit}
              className="px-6 py-2 rounded-full
              bg-gradient-to-r from-indigo-500 to-purple-600
              text-white font-medium
              shadow-md
              hover:scale-105 transition-all duration-300
              whitespace-nowrap"
            >
              Edit Profile
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
