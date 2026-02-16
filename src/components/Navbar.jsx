import ShimmerButton from "./ShimmerButton";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <div className="sticky top-0 z-50
  bg-white/80 dark:bg-gray-900/80
  backdrop-blur-xl
  border-b border-gray-200 dark:border-gray-700
  transition-colors duration-300"
>
  <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-4 
    flex items-center justify-between">

    {/* LEFT */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-black dark:bg-white" />
      <span className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
        Gidy
      </span>
    </div>

    {/* CENTER (Desktop only) */}
    <div className="hidden md:flex gap-8 text-sm font-medium">
      {["Jobs", "Hackathons", "Projects", "Tasks", "Organization"].map(
        (item) => (
          <div
            key={item}
            className="relative group cursor-pointer
            text-gray-600 dark:text-gray-300"
          >
            <span className="transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
              {item}
            </span>

            <span
              className="absolute left-0 -bottom-1 w-0 h-[2px]
              bg-indigo-500 transition-all duration-300
              group-hover:w-full"
            />
          </div>
        )
      )}
    </div>

    {/* RIGHT */}
    <div className="flex items-center gap-3 md:gap-4">

      {/* Mobile Menu */}
      <button className="md:hidden text-gray-700 dark:text-gray-200">
        ☰
      </button>

      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center 
        rounded-full bg-gray-100 dark:bg-gray-800
        text-gray-700 dark:text-gray-200
        hover:scale-105 transition-all duration-300"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>

      <ShimmerButton>Create</ShimmerButton>

      <div
        className="w-9 h-9 md:w-10 md:h-10 rounded-full 
        bg-indigo-500 text-white 
        flex items-center justify-center font-semibold
        hover:scale-105 transition-all duration-300"
      >
        A
      </div>
    </div>
  </div>
</div>

  );
}
