export default function ShimmerButton({ children }) {
  return (
    <button
      className="
        relative inline-flex h-11 items-center justify-center
        rounded-full px-6 font-medium
        border border-black-300 dark:border-purple-700
        text-white
        bg-[linear-gradient(110deg,#8b5cf6,45%,#c084fc,55%,#8b5cf6)]
dark:bg-[linear-gradient(110deg,#581c87,45%,#7c3aed,55%,#581c87)]
bg-[length:200%_100%]


        animate-shimmer
        transition
        hover:scale-[1.02]
        active:scale-[0.98]
      "
    >
      {children}
    </button>
  );
}
